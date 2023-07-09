import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PopUp from './PopUp'

function Capsules({ filterType, value }) {
    const [capsules, setCapsules] = useState([])
    const [currrentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItesmOffset] = useState(0)
    const [togglePopup, setTogglePopup] = useState(false)
    const [data, setData] = useState({})
    const itemsperpage = 6



    useEffect(() => {
        const endOffset = itemOffset + itemsperpage;
        setCurrentItems(capsules.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(capsules.length / itemsperpage))
    }, [itemOffset, itemsperpage, capsules])


    useEffect(() => {
        const fetchCapsules = async () => {
            console.log(filterType, value)
            if (filterType !== '' && value !== "") {
                const res = await fetch(`https://api.spacexdata.com/v3/capsules?${filterType}=${value}`)
                const data = await res.json()
                if (data) setCapsules(data)

            } else {

                const res = await fetch(`https://api.spacexdata.com/v3/capsules`)
                const data = await res.json()
                if (data) setCapsules(data)

            }


        }
        fetchCapsules()
    }, [filterType, value])

    const handlepageclick = (event) => {

        const newOffset = (event.selected * itemsperpage) % capsules.length
        console.log(newOffset)
        setItesmOffset(newOffset)
    }


    return (
        <>
            <section className='capsulesContainer py-10 ' id='capsules'>
                <h1 className='heading text-center mb-3'> Capsules</h1>
                <div className='max-width text-white grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5'>
                    {currrentItems && currrentItems.map((val) => (
                        <article onClick={() => {
                            setData(val)
                            setTogglePopup(!togglePopup)
                        }} key={val.capsule_serial} className='articles cursor-pointer' >
                            <h2 className='text-xl font-bold mb-5'>{val.type},<span className='text-base opacity-75 font-light'>{val.capsule_serial}</span></h2>
                            <ul>
                                <li className='mb-1'>Launch Date :{val.original_launch} </li>
                                <li className='mb-1'>{val.landings} land landings</li>
                                <li className='mb-1'>{val.missions.length} missions</li>
                                <li className='mb-1'>Reused {val.reuse_count}</li>
                                {val.status === 'active' ? <li className='text-emerald-500'>Active</li > : <li className='text-rose-500'>Retired</li>}

                            </ul>
                            <p className='mt-3 opacity-75'>{val.details}</p>
                        </article>
                    ))}
                </div>
                <div className="cont-footer-container">
                    <div className="pages">
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            pageCount={pageCount}
                            breakLabel={'...'}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            onPageChange={handlepageclick}
                            containerClassName={'pagination'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                            renderOnZeroPageCount={null}

                        />
                    </div>
                </div>
                {togglePopup && <PopUp data={data}  setTogglePopup={setTogglePopup}/>}
            </section>
        </>
    )
}

export default Capsules