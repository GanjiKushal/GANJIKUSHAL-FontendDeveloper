import React from 'react'

function Footer() {
    return (
        <section className='footerContainer px-10 py-10 '>
            <h2 className='mb-5 font-bold text-3xl'>SpaceX</h2>
            <div>
                <ul className='flex flex-col gap-5 px-8 '>
                    <li className="cursor-pointer"><a href="#Homepage">Homepage</a></li>
                    <li className="cursor-pointer"><a href="#Search">Search</a></li>
                    <li className="cursor-pointer"><a href="#capsules">Capsules</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
