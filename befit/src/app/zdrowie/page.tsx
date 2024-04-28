import Layout from "@/app/layout";

export default function Zdrowie() {
  return (
    <div style={{background: 'linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)'}}>
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Zdrowie</h1>
        <div className="mx-12 mt-12">
            <div className="grid grid-cols-2 gap-x-32 gap-t-14">
                <div className="bg-white h-96 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}></div>
                <div className="bg-white h-96 shadow-lg" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}></div>
            </div>
        </div>
    </div>
  );
}