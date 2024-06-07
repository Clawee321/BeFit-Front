"use client";

import Link from "next/link";
import React, { useState } from "react";
import Layout from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import brzuch1 from "@/assets/cwiczenia/brzuch 1.jpg";
import brzuch2 from "@/assets/cwiczenia/brzuch 2.jpg";
import brzuch3 from "@/assets/cwiczenia/brzuch 3.jpg";
import brzuch4 from "@/assets/cwiczenia/brzuch 4.jpg";
import nogi1 from "@/assets/cwiczenia/nogi 1.jpg";
import nogi2 from "@/assets/cwiczenia/nogi 2.jpg";
import nogi3 from "@/assets/cwiczenia/nogi 3.jpg";
import nogi4 from "@/assets/cwiczenia/nogi 4.jpg";
import taniec1 from "@/assets/cwiczenia/taniec 1.jpg";
import taniec2 from "@/assets/cwiczenia/taniec 2.jpg";
import taniec3 from "@/assets/cwiczenia/taniec 3.jpg";
import taniec4 from "@/assets/cwiczenia/taniec 4.jpg";
import joga1 from "@/assets/cwiczenia/joga 1.jpg";
import joga2 from "@/assets/cwiczenia/joga 2.jpg";
import joga3 from "@/assets/cwiczenia/joga 3.jpg";
import joga4 from "@/assets/cwiczenia/joga 4.jpg";
import cardio1 from "@/assets/cwiczenia/cardio 1.jpg";
import cardio2 from "@/assets/cwiczenia/cardio 2.jpg";
import cardio3 from "@/assets/cwiczenia/cardio 3.jpg";
import cardio4 from "@/assets/cwiczenia/cardio 4.jpg";

type Category = 'joga' | 'taniec' | 'brzuch' | 'pośladkinogi' | 'cardio';

const ćwiczeniaMap: Record<Category, { src: StaticImageData, title: string, video: string }[]> = {
  joga: [
    { src: joga1, title: "Full Body Yoga for Strength & Flexibility | 25 Minute At Home Mobility Routine", video: "https://www.youtube.com/watch?v=Eml2xnoLpYE&pp=ygUEam9nYQ%3D%3D" },
    { src: joga2, title: "30 Min FAT BURNING YOGA | Lean Muscles | Feel Strong + Balanced | No Jumping, No Repeat", video: "https://www.youtube.com/watch?v=IYSkQLXbtHE&pp=ygUEam9nYQ%3D%3D" },
    { src: joga3, title: "Poranna Joga na Dzień Dobry!", video: "https://www.youtube.com/watch?v=Uk2TRawRlBk&pp=ygUEam9nYQ%3D%3D" },
    { src: joga4, title: "Rozciągająca joga na koniec dnia | 20 min | ●○○○", video: "https://www.youtube.com/watch?v=7vebcKvEfzc&pp=ygUEam9nYQ%3D%3D" },
  ],
  taniec: [
    { src: taniec1, title: "DANCE CARDIO 🔥 | 30 MINUT | TRENING DO MUZYKI | SPALAJ KALORIE TAŃCZĄC!", video: "https://www.youtube.com/watch?v=BrW67hcIDTo&pp=ygUTxId3aWN6ZW5pYSB0YW5lY3puZQ%3D%3D" },
    { src: taniec2, title: "HERO - KIZO ft Bletka | Taneczny trening DANCE CARDIO", video: "https://www.youtube.com/watch?v=O0S0P3AZuug&pp=ygUTxId3aWN6ZW5pYSB0YW5lY3puZQ%3D%3D" },
    { src: taniec3, title: "TANECZNE CARDIO | Latino Dance", video: "https://www.youtube.com/watch?v=KMfNj55Mhl8&pp=ygUTxId3aWN6ZW5pYSB0YW5lY3puZQ%3D%3D" },
    { src: taniec4, title: "DANCE CARDIO | TANIEC I SPALANIE KALORII", video: "https://www.youtube.com/watch?v=yqZq20iLkug&pp=ygUTxId3aWN6ZW5pYSB0YW5lY3puZQ%3D%3D" },
  ],
  brzuch: [
    { src: brzuch1, title: "Trening na płaski brzuch 10 MIN / Monika Kołakowska", video: "https://www.youtube.com/watch?v=9ujGl__yKJM&pp=ygUUxId3aWN6ZW5pYSBuYSBicnp1Y2g%3D" },
    { src: brzuch2, title: "Trening BRZUCHA 15 min / Monika Kołakowska", video: "https://www.youtube.com/watch?v=Pd7QHgBtu-8&pp=ygUUxId3aWN6ZW5pYSBuYSBicnp1Y2g%3D" },
    { src: brzuch3, title: "10 MINUTOWY PROSTY I PRZYJEMNY TRENING BRZUCHA", video: "https://www.youtube.com/watch?v=SLMoA59fgcs&pp=ygUUxId3aWN6ZW5pYSBuYSBicnp1Y2g%3D" },
    { src: brzuch4, title: "Super BRZUCH 13 minut / Wyzwanie 10-dniowe / Monika Kołakowska", video: "https://www.youtube.com/watch?v=LSpADIqUCFE&pp=ygUUxId3aWN6ZW5pYSBuYSBicnp1Y2g%3D" },
  ],
  pośladkinogi: [
    { src: nogi1, title: "UDA I POŚLADKI 20 MIN 🍑 Trening modelujący nogi", video: "https://www.youtube.com/watch?v=J_V-ajB-zlQ&pp=ygUPxId3aWN6ZW5pYSBuw7Nn" },
    { src: nogi2, title: "TRENING NA UDA I POŚLADKI 15 MIN / DOMOWY TRENING/ BEZ SPRZĘTU", video: "https://www.youtube.com/watch?v=8KwOnmPMYh0&pp=ygUPxId3aWN6ZW5pYSBuw7Nn" },
    { src: nogi3, title: "SZCZUPŁE UDA - TRENING NA POŚLADKI I WEWNĘTRZNĄ CZĘŚĆ UD", video: "https://www.youtube.com/watch?v=4Sh_p1FZRF8&pp=ygUPxId3aWN6ZW5pYSBuw7Nn" },
    { src: nogi4, title: "JAK SCHUDNĄĆ Z UD W 21 DNI?/ 15 MINUTOWY TRENING NA SMUKŁE UDA!", video: "https://www.youtube.com/watch?v=ZqK77tBWXEU&pp=ygUPxId3aWN6ZW5pYSBuw7Nn" },
  ],
  cardio: [
    { src: cardio1, title: "Odchudzający Trening CARDIO dla początkujących bez maty proste ćwiczenia", video: "https://www.youtube.com/watch?v=fwTffUDL1lQ&t=551s&pp=ygURxId3aWN6ZW5pYSBjYXJkaW8%3D" },
    { src: cardio2, title: "CICHE CARDIO NA STOJĄCO / BEZ MATY / ODCHUDZAJĄCY TRENING DLA KAŻDEGO", video: "https://www.youtube.com/watch?v=nrbgxHlX7Ho&t=467s&pp=ygURxId3aWN6ZW5pYSBjYXJkaW8%3D" },
    { src: cardio3, title: "Szybkie CARDIO 13 minut / Wyzwanie 10 dniowe / Monika Kołakowska", video: "https://www.youtube.com/watch?v=omS75UFWsdo&pp=ygURxId3aWN6ZW5pYSBjYXJkaW8%3D" },
    { src: cardio4, title: "30 MIN PUMPING CARDIO WORKOUT | Full Body - No Equipment at Home", video: "https://www.youtube.com/watch?v=kZDvg92tTMc&pp=ygURxId3aWN6ZW5pYSBjYXJkaW8%3D" },
  ],
};

export default function Ćwiczenia() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("cardio");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value as Category);
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)' }}>
      <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Ćwiczenia</h1>
      <div className="max-w-md mt-12 ml-16 mb-12">
        <select
          className="shadow-lg font-abhaya text-xl text-black block w-full py-2 px-4 font-bold bg-white border border-gray-300 rounded-full focus:outline-none focus:border-emerald-800 focus:ring focus:ring-emerald-700 focus:ring-opacity-50"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="joga">Joga</option>
          <option value="taniec">Ćwiczenia taneczne</option>
          <option value="brzuch">Ćwiczenia na brzuch</option>
          <option value="pośladkinogi">Ćwiczenia na pośladki i nogi</option>
          <option value="cardio">Ćwiczenia cardio</option>
        </select>
      </div>
      <div className="mx-12 mt-12 pb-12">
        <div className="grid grid-cols-2 gap-x-32 gap-y-14">
          {ćwiczeniaMap[selectedCategory].map((ćwiczenie, index) => (
            <div
              key={index}
              className="bg-white shadow-lg"
              style={{ width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <Link href={ćwiczenie.video} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center px-4 pt-4 pb-4">
                  <Image src={ćwiczenie.src} alt={ćwiczenie.title} />
                </div>
                <h2 className="text-2xl font-bold text-black px-4 font-abhaya">{ćwiczenie.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/*"use client"

import React, { useEffect, useState } from "react";
import { getExerciseData, GetExerciseData } from "@/app/hooks/cwiczeniamain";
import Image from "next/image";
import Link from "next/link";
import LoadingScene from "@/components/common/LoadingScene";

// Definicja typu dla kategorii
type Category = 'joga' | 'taniec' | 'brzuch' | 'pośladkinogi' | 'cardio';

export default function Ćwiczenia() {
  const [exercises, setExercises] = useState<GetExerciseData[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>("cardio");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getExerciseData(selectedCategory);
      if (typeof data === "string") {
        setError(data);
      } else {
        setExercises(data);
      }
    }
    fetchData();
  }, [selectedCategory]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value as Category);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!exercises) {
    return <LoadingScene />;
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)' }}>
      <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Ćwiczenia</h1>
      <div className="max-w-md mt-12 ml-16 mb-12">
        <select
          className="shadow-lg font-abhaya text-xl text-black block w-full py-2 px-4 font-bold bg-white border border-gray-300 rounded-full focus:outline-none focus:border-emerald-800 focus:ring focus:ring-emerald-700 focus:ring-opacity-50"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="joga">Joga</option>
          <option value="taniec">Ćwiczenia taneczne</option>
          <option value="brzuch">Ćwiczenia na brzuch</option>
          <option value="pośladkinogi">Ćwiczenia na pośladki i nogi</option>
          <option value="cardio">Ćwiczenia cardio</option>
        </select>
      </div>
      <div className="mx-12 mt-12 pb-12">
        <div className="grid grid-cols-2 gap-x-32 gap-y-14">
          {exercises.map((ćwiczenie: GetExerciseData, index: number) => (
            <div
              key={index}
              className="bg-white shadow-lg"
              style={{ width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <Link href={ćwiczenie.video}>
                <div className="flex justify-center px-4 pt-4 pb-4">
                  <Image src={ćwiczenie.image} alt={ćwiczenie.kategoria} />
                </div>
                <h2 className="text-2xl font-bold text-black px-4 font-abhaya">{ćwiczenie.kategoria}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}*/
