import Layout from "@/app/layout";

export default function Przepisy() {
  return (
    <div className="bg-gradient-to-b from-white from-10% to-emerald-200 to-90% pb-8">
        <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">Przepisy na dania niskokaloryczne</h1>
        <div className="mx-12 mt-12">
            <div className="grid grid-cols-4 gap-x-16 gap-y-14">
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
                <div className="bg-white h-80"></div>
            </div>
        </div>
    </div>
  );
}