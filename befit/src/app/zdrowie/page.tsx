import Layout from "@/app/layout";

export default function Zdrowie() {
  return (
    <div className="bg-gradient-to-b from-white from-10% to-emerald-200 to-90% pb-8">
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Zdrowie</h1>
        <div className="mx-12 mt-12">
            <div className="grid grid-cols-2 gap-x-32 gap-t-14">
                <div className="bg-white h-96"></div>
                <div className="bg-white h-96"></div>
            </div>
        </div>
    </div>
  );
}