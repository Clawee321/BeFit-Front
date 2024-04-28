import Image from "next/image";
import Link from "next/link";
import runPicture from "@/assets/main/run.jpeg";
import logo from "@/assets/logo.png";
import heart from "@/assets/main/heart.png";
import calc from "@/assets/main/calc.png";
import dumbbell from "@/assets/main/dumbbell.jpg";
import food from "@/assets/main/food.png";
import carbonara from "@/assets/main/carbonara.jpg";
import szoty from "@/assets/main/szoty.jpg";
import gofry from "@/assets/main/gofry.jpg";
import dance from "@/assets/main/dance.jpg";
import yoga from "@/assets/main/yoga.jpg";

export default function Home() {
  return (
    <div className="text-black font-abhaya" style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
      <div className="mx-auto py-10">
        <div className="grid grid-cols-1">
          <div className="bg-white w-3/4 mx-auto p-12 flex shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="relative w-2/3 mr-16">
              <Image src={runPicture} alt="runPic" layout="fill" objectFit="cover"/>
            </div>
            <div className="w-1/3 flex flex-col justify-center">
              <h1 className="text-center text-2xl font-bold pt-8">Zadbaj z nami o swoje zdrowie</h1>
              <p className={"mt-8 text-base"}>
                &nbsp;&nbsp;&nbsp;&nbsp;Odkryj naszą stronę poświęconą zdrowemu stylowi życia.
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Artykuły o zdrowiu, przepisy na dania niskokaloryczne, możliwość obliczenia swojego zapotrzebowania kalorycznego, a także różnorakie treningi - wszystko w jednym miejscu!
              </p>
              <div className="mx-auto mt-16">
                <Image src={logo} alt="logo" width={150} height={150}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex justify-center">
      <div className="grid grid-cols-2 gap-x-20 gap-y-14 mx-auto font-abhaya">
        <Link href="/zdrowie">
        <div className="bg-white h-80 shadow-lg" style={{ width: "450px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)"}}>
          <div className="flex justify-center pt-4">
            <Image src={heart} alt="zdrowie" width={150} height={150}/>
          </div>
          <h2 className="text-center text-3xl font-bold mt-1 font-abhaya">Zdrowie</h2>
          <div className="flex justify-center items-center">
            <p className="mt-4 text-xl text-center w-4/5">
              Dowiedz się jak łatwo można zacząć dbać o swoje zdrowie
            </p>
          </div>
        </div>
        </Link>
        <Link href="/przepisy">
        <div className="bg-white h-80 shadow-lg" style={{ width: "450px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)"}}>
          <div className="flex justify-center pt-4">
            <Image src={food} alt="przepisy" width={150} height={150}/>
          </div>
          <h2 className="text-center text-3xl font-bold mt-1 font-abhaya">Przepisy</h2>
          <div className="flex justify-center items-center">
            <p className="mt-4 text-xl text-center w-4/5">
              Wybierz i przygotuj zrównoważony, niskokaloryczny posiłek z naszych przepisów
            </p>
          </div>
        </div>
        </Link>
        <Link href="/cwiczenia">
        <div className="bg-white h-80 shadow-lg" style={{ width: "450px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)"}}>
          <div className="flex justify-center pt-12">
            <Image src={dumbbell} alt="ćwiczenia" width={150} height={150}/>
          </div>
          <h2 className="text-center text-3xl font-bold mt-1 font-abhaya">Ćwiczenia</h2>
          <div className="flex justify-center items-center">
            <p className="mt-4 text-xl text-center w-4/5">
              Znajdź odpowiedni trening dla siebie
            </p>
          </div>
        </div>
        </Link>
        <Link href="/kalkulator">
        <div className="bg-white h-80 shadow-lg" style={{ width: "450px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)"}}>
          <div className="flex justify-center pt-4">
            <Image src={calc} alt="kalkulator" width={150} height={150}/>
          </div>
          <h2 className="text-center text-3xl font-bold mt-1 font-abhaya">Kalkulator</h2>
          <div className="flex justify-center items-center">
            <p className="mt-4 text-xl text-center w-4/5">
              Oblicz swoje dzienne zapotrzebowanie kaloryczne
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
    <h2 className="text-3xl font-abhaya ml-40 font-semibold mt-24 pb-12">Popularne przepisy</h2>
    <div className="mx-12">
      <div className="grid grid-cols-3 gap-x-16 w-4/5 mx-auto">
        {/*Podmienic linki*/}
        <Link href="/przepisy"> <div className="bg-white h-80 w-72 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="flex justify-center px-4 pt-8 pb-4">
            <Image src={carbonara} alt="carbonara" width={350} height={350}/>
          </div>
          <h2 className="text-2xl font-medium px-4 font-abhaya">Fit makaron à la carbonara</h2>
          </div></Link>
        <Link href="/przepisy"> <div className="bg-white h-80 w-72 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="flex justify-center px-4 pt-8 pb-4">
            <Image src={szoty} alt="szoty witaminowe" width={550} height={400}/>
          </div>  
          <h2 className="text-2xl font-medium px-4 font-abhaya">Zielone szoty witaminowe</h2>
          </div></Link>
        <Link href="/przepisy"> <div className="bg-white h-80 w-72 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="flex justify-center px-4 pt-8 pb-4">
            <Image src={gofry} alt="carbonara" width={350} height={350}/>
          </div>
          <h2 className="text-2xl font-medium px-4 font-abhaya">Gofry owsiane</h2>
          </div></Link>          
      </div>
    </div>
    <h2 className="text-3xl font-abhaya ml-40 font-semibold mt-20 pb-12">Popularne ćwiczenia</h2>
    <div className="mx-12 pb-24">
      <div className="grid grid-cols-2 gap-x-20 w-4/5 mx-auto">
        {/*Podmienic linki*/}
          <Link href="/cwiczenia"><div className="bg-white shadow-lg" style={{width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)"}}>
              <div className="flex justify-center px-4 pt-4 pb-2">
                <Image src={dance} alt="workout dance"/>
              </div>
              <h2 className="text-2xl font-medium px-4 font-abhaya">DANCE CARDIO | TANIEC I SPALANIE KALORII</h2>  
            </div>
          </Link>
          <Link href="/cwiczenia"><div className="bg-white shadow-lg" style={{width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)"}}>
          <div className="flex justify-center px-4 pt-4 pb-2">
                <Image src={yoga} alt="workout dance"/>
              </div>
              <h2 className="text-2xl font-medium px-4 font-abhaya">Full Body Yoga for Strength & Flexibility | 25 Minute At Home Mobility Routine</h2> 
            </div></Link>
      </div>
    </div>
    </div>
  );
}
