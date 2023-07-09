import React from 'react'

import { SiSpacex } from 'react-icons/si'
export default function Header() {
    return (
        <header className='headerContainer absolute flex items-center justify-between px-5 w-full' >
            <div>
                <a href='/#'>
                    {<SiSpacex className='text-8xl text-white' />}
                </a>
            </div>
            <nav className='mr-5'>
                <ul className='flex flex-row items-center justify-evenly gap-5'>
                    <li className='text-white text-sm lg:text-base'>
                        <a href='#Homepage'>Homepage</a>
                    </li>
                    <li>
                        <a href='#Search' className='text-white text-sm lg:text-base'>Search</a>
                    </li>
                    <li className='text-white text-sm lg:text-base'>
                        <a href='#capsules'>Capsules</a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
