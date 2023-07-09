import React from 'react'

function Search({ filterType, setValue, setFilterType }) {
    const filterData = (e) => {
        setFilterType(e.target.value)
    }
    const filterValue = (e) => {
        setValue(e.target.value)
    }
    return (
        <section className='searchContainer' id='Search'>
            <div className='flex flex-col gap-5'>
                <div>
                    <label htmlFor="filter" className='text-white'>Select Filter Type: </label>
                    <select name="filter" id="filter" onChange={filterData} >
                        <option value="">All Data</option>
                        <option value="type">Capsule Type</option>
                        <option value='status'>Status</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={filterType} className='text-white'>Select Type: </label>
                    <select name={filterType} id={filterType} onChange={filterValue}>

                        {
                            filterType === "status" ?
                                <>
                                    <option value="">Select</option>
                                    <option value="active">Active</option>
                                    <option value="retired">Retired</option>
                                    <option value="unknown">Unknown</option>
                                    <option value='destroyed'>Destroyed</option></> : filterType === "type" ?
                                    <>
                                        <option value="">Select</option>
                                        <option value="Dragon 1.0">Dragon 1.0</option>
                                        <option value="Dragon 1.1">Dragon 1.1</option>
                                        <option value="Dragon 2.0">Dragon 2.0</option>
                                    </> : <option >select</option>

                        }
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Search