import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
function PopUp({ data, setTogglePopup }) {

    return (
        <section className='popupMainContainer flex items-center justify-center py-5'>
            {data && <article className='popUpContainer text-white mt-5'>
                <header className='flex justify-between px-2 bg-slate-800 '>
                    <h3 className='text-2xl'>{data.type}</h3>
                    <button className='text-2xl' onClick={() => { setTogglePopup(false) }}><AiOutlineCloseCircle /></button>
                </header>
                <div className='bg-zinc-900 px-5 pb-5'>
                    <h2 className='text-xl font-bold mb-4 pt-4 capitalize '>Capsule Id: {data.capsule_id} <span className='text-base opacity-75 font-light'>{data.capsule_serial}</span></h2>
                    {data.status === 'active' ? <p className='text-emerald-500'>Active</p > : <p className='text-rose-500'>Retired</p>}
                    <p className='mb-1 capitalize text-1xl'>original Launch: {data.original_launch}</p>
                    <p className='mb-1 capitalize text-1xl'>original_launch_unix: {data.original_launch_unix}</p>
                    <p className='mb-1 capitalize text-1xl'>landings: {data.landings}</p>
                    <p className='mb-1 capitalize text-1xl'>Type: {data.type}</p>
                    <p className='mb-1 capitalize text-1xl'>Reuse Count: {data.reuse_count} </p>
                    <p className='mb-1 capitalize text-1xl'>Missions: { } </p>
                    <p className='mb-1 capitalize text-1xl'>Missions: {data.missions.length} </p>
                    <div className='flex justify-between px-5 mb-1 flex-wrap'>
                        {data.missions && data.missions.map((val) => (

                            <ul>
                                <li>Name: {val.name}</li>
                                <li>flights: {val.flight}</li>
                            </ul>
                        ))}
                    </div>
                    <p className=' capitalize text-1xl'>{data.details}</p>


                </div>
            </article>}
        </section>
    )
}

export default PopUp
