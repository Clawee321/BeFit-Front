import Layout from "@/app/layout";
import Image from "next/image";
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

export default function Ćwiczenia() {
  return (
    <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Ćwiczenia</h1>
        <div className="max-w-md mt-12 ml-16 mb-12">
            
            <select className="shadow-lg font-abhaya text-xl text-black block w-full py-2 px-4 font-bold bg-white border border-gray-300 rounded-full focus:outline-none focus:border-emerald-800 focus:ring focus:ring-emerald-700 focus:ring-opacity-50">
                
                <option value="joga" >Joga</option>
                <option value="taniec" >Ćwiczenia taneczne</option>
                <option value="brzuch" >Ćwiczenia na brzuch</option>
                <option value="pośladkinogi" >Ćwiczenia na pośladki i nogi</option>
                <option value="cardio" selected>Ćwiczenia cardio</option>
            </select>
        </div>
        
        <div className="mx-12 mt-12">
            <div className="grid grid-cols-2 gap-x-32 gap-y-14">
                <div className="bg-white h-96 shadow-lg" style={{ width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                   
                    <div className="flex justify-center px-4 pt-4 pb-4">
                        <Image src={cardio1} alt="cardio 1"/>
                    </div>  
                    <h2 className="text-2xl font-bold text-black px-4 font-abhaya">Odchudzający Trening CARDIO dla początkujących bez maty proste ćwiczenia</h2> 

                </div>
                <div className="bg-white h-96 shadow-lg"style={{ width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex justify-center px-4 pt-4 pb-4">
                        <Image src={cardio2} alt="cardio 2"/>
                    </div>  
                    <h2 className="text-2xl font-bold text-black px-4 font-abhaya">CICHE CARDIO NA STOJĄCO / BEZ MATY / ODCHUDZAJĄCY TRENING DLA KAŻDEGO</h2> 
                </div>
                <div className="bg-white h-96 shadow-lg"style={{ width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex justify-center px-4 pt-4 pb-4">
                        <Image src={cardio3} alt="cardio 3"/>
                    </div>  
                    <h2 className="text-2xl font-bold text-black px-4 font-abhaya">Szybkie CARDIO 13 minut / Wyzwanie 10 dniowe / Monika Kołakowska</h2> 
                    </div>
                <div className="mb-20  bg-white h-96 shadow-lg"style={{ width: "550px", height: "400px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex justify-center px-4 pt-4 pb-4">
                        <Image src={cardio4} alt="cardio 4"/>
                    </div>  
                    <h2 className="text-2xl font-bold text-black px-4 font-abhaya">30 MIN PUMPING CARDIO WORKOUT | Full Body - No Equipment at Home</h2> 
                </div>

            </div>
        </div>
    </div>
  );
}