import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-gray-800 border-b-2 border-green-800">
        <div className="ml-5">
            <a>
                <Image src={logo} alt="Logo" width={150} height={150} />
            </a>
        </div>
        <div className="flex flex-grow items-center justify-end mr-5 space-x-8 text-xs font-abhaya">
            <Link href="/zdrowie" className="flex-1 text-center">Zdrowie</Link>
            <Link href="/przepisy" className="flex-1 text-center">Przepisy</Link>
            <Link href="/cwiczenia" className="flex-1 text-center">Ćwiczenia</Link>
            <Link href="/kalkulator" className="flex-1 text-center">Kalkulator zapotrzebowania kalorycznego</Link>
        </div>
    </nav>
  )
}

export default Navbar
