import Layout from "@/app/layout";

export default function Kalkulator() {
  return (
    <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Kalkulator zapotrzebowania kalorycznego</h1>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 ">
          <div>
        <div className="mx-12 mt-12 flex flex-row justify-start">
            <div className="grid grid-cols-4 gap-x-5 gap-y-5  ">
          
            <h2 className="text-3xl text-black px-4 font-bold font-abhaya">Płeć</h2> 
          
          <div className="inline-flex col-span-2 rounded-md space-x-7" role="group">
          <button className="bg-white hover:bg-gray-100 focus:bg-ziel1 text-black text-2xl py-2 px-10 shadow-lg rounded-2xl font-abhaya">
            Kobieta
          </button>
          <button className="bg-white hover:bg-gray-100 focus:bg-ziel1 text-black text-2xl py-2 px-10 shadow-lg rounded-2xl font-abhaya">
          
            Mężczyzna

          </button>
          </div>
          <div></div>
          <h2 className="text-3xl text-black px-4 font-bold font-abhaya">Waga</h2> 
          <input type="text" id="waga" className="bg-ziel1 border-2 shadow-lg border-ziel1 text-gray-900 text-2xl rounded-2xl focus-within:outline-none focus:ring-ziel2  focus:border-emerald-800 block p-2.5" required />
          <h2 className="text-3xl text-black px-4 font-bold font-abhaya">kg</h2> 
          <div></div>
          <h2 className="text-3xl text-black px-4 font-bold font-abhaya">Wzrost</h2> 
          <input type="text" id="wzrost" className="bg-ziel1 border-2 shadow-lg border-ziel1 text-gray-900 text-2xl rounded-2xl focus-within:outline-none focus:ring-ziel2  focus:border-emerald-800 block p-2.5" required />
          <h2 className="text-3xl text-black px-4 font-bold font-abhaya">cm</h2> 
          <div></div>
          <h2 className="text-3xl text-black px-4 font-bold font-abhaya">Wiek</h2> 
          <input type="text" id="wiek" className="bg-ziel1 border-2 shadow-lg border-ziel1 text-gray-900 text-2xl rounded-2xl focus-within:outline-none focus:ring-ziel2  focus:border-emerald-800 block p-2.5" required />
          <h2 className="text-3xl text-black px-4 font-bold font-abhaya">lat</h2> 
          <div></div>
          </div>
          </div>
          
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 px-10  ">
          <div></div>
          <h2 className="text-3xl text-black font-bold font-abhaya justify-start ">Aktywność fizyczna </h2> 
         
          <select className=" font-abhaya font-bold text-2xl text-black py-2 px-4 w-2/3 bg-ziel1 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:border-emerald-700 focus:ring focus:ring-emerald-600 focus:ring-opacity-50 " >
          
          <option value="0" disabled selected hidden>Wybierz rodzaj aktywności fizycznej</option>
                <option value="znikoma" >Znikoma(brak ćwiczeń, praca siedząca, szkoła)</option>
                <option value="mala" >Bardzo mała(ćwiczenia raz na tydzień, praca lekka)</option>
                <option value="umiarkowana" >Umiarkowana(średnio intensywne ćw. 2 razy w tygodniu)</option>
                <option value="duza" >Duża (dość ciężki trening kilka razy w tyg.)</option>
                <option value="bardzoduza" >Bardzo duża (4 cieżkie treningi w tyg. praca fizyczna)</option>
            </select>
            <h2 className="text-3xl text-black font-bold font-abhaya  justify-start ">Cel diety </h2> 
          <select className="font-abhaya font-bold text-2xl text-black py-2 px-4 w-2/3 bg-ziel1 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:border-emerald-700 focus:ring focus:ring-emerald-600 focus:ring-opacity-50 " >
          <option value="0" disabled selected hidden>Wybierz co chcesz osiągnąć</option>
                <option value="znikoma" >Szybkie zwiększenie masy</option>
                <option value="mala" >Zwiększenie masy</option>
                <option value="umiarkowana" >Utrzymanie obecnej wagi</option>
                <option value="duza" >Odchudzanie</option>
                <option value="bardzoduza" >Szybkie odchudzanie</option>
            </select>
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 px-10 ">
          <div></div>
          <button className="mb-20 bg-ziel2 hover:bg-gray-800 text-white text-3xl py-2 text-center shadow-lg rounded-2xl font-abhaya">
            Oblicz
          </button>
          </div>
          </div>
         
          </div>
          <div className="w-2/3 h-4/5 bg-white rounded p-6 py-40 float-left shadow-lx4">
    <div className="font-bold text-gray-700  text-7xl font-abhaya text-center mb-20">0000 kcal</div>
    <p className="text-gray-700  text-4xl text-center font-abhaya">
      Tyle wynosi twoje dzienne zapotrzebowanie kaloryczne, aby osiągnąć podany cel.
    </p>
</div>
          </div>

        </div>


        













  );
}
