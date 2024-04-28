import Layout from "@/app/layout";

export default function Ćwiczenia() {
  return (
    <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Ćwiczenia</h1>
        <div className="max-w-md mt-12 ml-16 mb-12">
            <select className="font-abhaya text-xl text-black block w-full py-2 px-4 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50">
                <option value="joga">Joga</option>
                <option value="taniec">Ćwiczenia taneczne</option>
                <option value="brzuch">Ćwiczenia na brzuch</option>
                <option value="pośladkinogi">Ćwiczenia na pośladki i nogi</option>
                <option value="cardio">Ćwiczenia cardio</option>
            </select>
        </div>
        <div className="mx-12 mt-12">
            <div className="grid grid-cols-2 gap-x-32 gap-y-14">
                <div className="bg-white h-96 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}></div>
                <div className="bg-white h-96 shadow-lg"style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}></div>
                <div className="bg-white h-96 shadow-lg"style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}></div>
                <div className="bg-white h-96 shadow-lg"style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}></div>
            </div>
        </div>
    </div>
  );
}