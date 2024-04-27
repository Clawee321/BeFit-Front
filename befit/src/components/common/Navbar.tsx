  import React from 'react'
  import Link from 'next/link'
  import Image from 'next/image'
  import logo from '@/assets/logo.png'

  const Navbar = () => {
    return (
      <nav className="relative">
        <div className="flex justify-between items-center px-4 py-10 bg-white text-emerald-700 decoration-solid decoration-slate-500 border-green-800">
          <div className="ml-20">
            <Link href="/">
              <Image src={logo} alt="Logo" width={200} height={200} />
            </Link>
          </div>
          <div className="flex flex-grow items-center justify-end ml-60 mr-20 text-xl space-x-8 font-semibold font-abhaya">
            <Link href="/zdrowie" className="flex-1 text-center ">Zdrowie</Link>
            <Link href="/przepisy" className="flex-1 text-center">Przepisy</Link>
            <Link href="/cwiczenia" className="flex-1 text-center ">Ćwiczenia</Link>
            <Link href="/kalkulator" className="flex-1 text-center">Kalkulator kalorii</Link>
          </div>
        </div>
        <hr className="absolute w-full border-gray-300" style={{ bottom: "-1px" }} /> 
      </nav>
    )
  }

  export default Navbar
