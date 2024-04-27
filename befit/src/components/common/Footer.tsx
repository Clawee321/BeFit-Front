import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#88aca4] text-white p-10 font-abhaya">
      <div className="container mx-auto flex justify-between items-start">
        <div className="w-2/5 text-[#c5d6cb] font-semibold text-lg ml-4">
          <p>
            Na naszej stronie zamieszczamy artykuły dotyczące dbania o zdrowie, przepisy na zdrowe posiłki,
            filmiki z ćwiczeniami oraz umożliwiamy łatwe i szybkie obliczanie zapotrzebowania kalorycznego.
          </p>
          <p className="mt-4">
            Zadbaj z nami o swoje zdrowie już dziś, Bądź Fit!
          </p>
        </div>
        <div className="w-1/3 flex flex-col space-y-2 font-medium text-lg ml-80 mr-0">
          <Link href="/zdrowie" className="hover:underline text-[#20665b]">Zdrowie</Link>
          <Link href="/przepisy" className="hover:underline text-[#20665b]">Przepisy</Link>
          <Link href="/cwiczenia" className="hover:underline text-[#20665b]">Ćwiczenia</Link>
          <Link href="/kalkulator" className="hover:underline text-[#20665b]">Kalkulator zapotrzebowania kalorycznego</Link>
        </div>
        <div className="mr-0 mt-10 w-1/7">
          <Link href="/">
            <Image src={logo} alt="Logo" width={250} height={250} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
