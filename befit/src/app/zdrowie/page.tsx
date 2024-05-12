import Layout from "@/app/layout";
import Link from "next/link";
import Image from "next/image";
import szklanka from "@/assets/zdrowie/Woda lista artykulow.jpg";
import stetoskop from "@/assets/zdrowie/Badania lista artykulow.jpg";


export default function Zdrowie() {
  return (
    <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Zdrowie</h1>
        <div className="mx-12 mt-12 pb-16">
            <div className="grid grid-cols-2 gap-x-32 gap-t-14">
              <Link href="/zdrowie/articles/woda">
                <div className="bg-white h-220 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex justify-center px-12 pt-12 pb-4">
                    <Image src={szklanka} alt="szklanka"/>
                    
                    </div> 

                      <div className=" text-black  font-abhaya  ml-12 mr-12">
                     <h2 className=" text-3xl">
                     Nawadnianie – dlaczego pić dużo wody?
                     </h2>
                     <p className="mt-4 text-xl font-light leading-8 line-clamp-5 text-justify">
                     Woda jest życiodajnym źródłem, które odgrywa kluczową rolę w utrzymaniu zdrowia i dobrego samopoczucia. Spożywanie odpowiedniej ilości wody ma wiele korzyści dla organizmu, zarówno pod względem fizycznym, jak i psychicznym. W tym artykule omówimy główne powody, dla których warto pić dużo wody i jakie korzyści niesie to dla naszego zdrowia.
                     </p>
                     <div className="pb-20"></div>
                        </div>
                </div>
                </Link>
                <Link href="/zdrowie/articles/badania">
                <div className="bg-white h-220 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <div className="flex justify-center px-12 pt-12 pb-4">
                    <Image src={stetoskop} alt="stetoskop"/>
                  </div> 
                  <div className=" text-black  font-abhaya  ml-12 mr-12">
                     <h2 className="text-3xl">
                     Regularne badania
                     </h2>
                     <p className="mt-4 text-xl font-light leading-8 line-clamp-5 text-justify">
                     Dobra dieta, dużo ruchu, zrównoważony tryb życia i profilaktyka – to recepta na zdrowe, długie życie. W zależności od wieku, płci, stylu życia oraz zachorowań w rodzinie, jesteśmy mniej lub bardziej podatni na rozmaite zachorowania. Regularne wykonywanie badań profilaktycznych pomaga zarówno sprawdzić stan zdrowia, a także  na wczesnym etapie wykryć stany chorobowe, które mogą w efekcie doprowadzić do poważniejszych schorzeń. Badania profilaktyczne można wykonywać zarówno w ramach Narodowego Funduszu Zdrowia, jak i prywatnej opieki medycznej – w tym drugim przypadku okres oczekiwania na poszczególne wizyty może być o wiele krótszy.                     
                     </p>
                     <div className="pb-20"></div>
                      </div>
                </div>
                </Link>
            </div>
            
        </div>
    </div>
  );
}