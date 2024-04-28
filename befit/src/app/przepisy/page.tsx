import Image from "next/image";
import Link from "next/link";
import carbonara from "@/assets/przepisy/carbonara.jpg";
import deser from "@/assets/przepisy/Deser.jpg";
import gofry from "@/assets/przepisy/gofry.jpg";
import makaron from "@/assets/przepisy/Makaron cukinia.jpg";
import kotleciki from "@/assets/przepisy/Kotleciki.jpg";
import szarlotka from "@/assets/przepisy/Szarlotka.jpg";
import szoty from "@/assets/przepisy/szoty.jpg";
import zupa from "@/assets/przepisy/Zupa dyniowa.jpg";

export default function Przepisy() {
  return (
    <div className="text-black" style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Przepisy na dania niskokaloryczne</h1>
        <div className="mx-12 mt-12 pb-16">
            <div className="grid grid-cols-4 gap-x-16 gap-y-14">
                <div className="bg-white h-80 w-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={kotleciki} alt="kotleciki"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Kotleciki z kaszy jaglanej z brokułami</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={szoty} alt="szoty"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Zielone szoty witaminowe</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={gofry} alt="gofry"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Gofry owsiane</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={carbonara} alt="carbonara"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Fit makaron à la carbonara</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={deser} alt="deser"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Proteinowy deser z ciasteczkami cantuccini</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={zupa} alt="zupa" width={350} height={350}/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Zupa krem z dyni</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={szarlotka} alt="szarlotka"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Zdrowa szarlotka</h2> 
                </div>
                <div className="bg-white h-80 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image src={makaron} alt="makaron"/>
                  </div>  
                  <h2 className="text-2xl font-medium px-4 font-abhaya">Dietetyczny kremowy makaron z cukinią</h2> 
                </div>
            </div>
        </div>
    </div>
  );
}