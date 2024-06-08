"use client";
import { useState } from "react";
// import Layout from "@/app/layout";

export default function Kalkulator() {
  // Define types for state variables
  const [gender, setGender] = useState<"female" | "male" | null>(null);
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [calories, setCalories] = useState<string | null>(null);

  const handleCalculate = () => {
    if (gender && weight && height && age && activity && goal) {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const ageNum = parseFloat(age);

      let A: number | undefined;
      if (gender === "female") {
        A = 655 + 9.6 * weightNum + 1.85 * heightNum - 4.7 * ageNum;
      } else if (gender === "male") {
        A = 66.5 + 13.7 * weightNum + 5 * heightNum - 6.8 * ageNum;
      }

      if (A !== undefined) {
        const B = parseFloat(activity);
        const C = parseFloat(goal);

        const D: number = A * B * C;
        setCalories(D.toFixed(0));
      }
    } else {
      alert("Proszę wypełnić wszystkie pola formularza.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)",
      }}
    >
      <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">
        Kalkulator zapotrzebowania kalorycznego
      </h1>
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 ">
        <div>
          <div className="mx-12 mt-12 flex flex-row justify-start">
            <div className="grid grid-cols-4 gap-x-5 gap-y-5  ">
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                Płeć
              </h2>

              <div
                className="inline-flex col-span-2 rounded-md space-x-7"
                role="group"
              >
                <button
                  className={`bg-white hover:bg-gray-100 focus:bg-ziel1 text-black text-2xl py-2 px-10 shadow-lg rounded-2xl font-abhaya ${
                    gender === "female" ? "bg-ziel1" : ""
                  }`}
                  onClick={() => setGender("female")}
                >
                  Kobieta
                </button>
                <button
                  className={`bg-white hover:bg-gray-100 focus:bg-ziel1 text-black text-2xl py-2 px-10 shadow-lg rounded-2xl font-abhaya ${
                    gender === "male" ? "bg-ziel1" : ""
                  }`}
                  onClick={() => setGender("male")}
                >
                  Mężczyzna
                </button>
              </div>
              <div></div>
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                Waga
              </h2>
              <input
                type="text"
                id="waga"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-ziel1 border-2 shadow-lg border-ziel1 text-gray-900 text-2xl rounded-2xl focus-within:outline-none focus:ring-ziel2  focus:border-emerald-800 block p-2.5"
                required
              />
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                kg
              </h2>
              <div></div>
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                Wzrost
              </h2>
              <input
                type="text"
                id="wzrost"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-ziel1 border-2 shadow-lg border-ziel1 text-gray-900 text-2xl rounded-2xl focus-within:outline-none focus:ring-ziel2  focus:border-emerald-800 block p-2.5"
                required
              />
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                cm
              </h2>
              <div></div>
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                Wiek
              </h2>
              <input
                type="text"
                id="wiek"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-ziel1 border-2 shadow-lg border-ziel1 text-gray-900 text-2xl rounded-2xl focus-within:outline-none focus:ring-ziel2  focus:border-emerald-800 block p-2.5"
                required
              />
              <h2 className="text-3xl text-black px-4 font-bold font-abhaya">
                lat
              </h2>
              <div></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 px-10  ">
            <div></div>
            <h2 className="text-3xl text-black font-bold font-abhaya justify-start ">
              Aktywność fizyczna{" "}
            </h2>

            <select
              className=" font-abhaya font-bold text-2xl text-black py-2 px-4 w-2/3 bg-ziel1 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:border-emerald-700 focus:ring focus:ring-emerald-600 focus:ring-opacity-50 "
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="" disabled>
                Wybierz rodzaj aktywności fizycznej
              </option>
              <option value="1.0">
                Znikoma(brak ćwiczeń, praca siedząca, szkoła)
              </option>
              <option value="1.2">
                Bardzo mała(ćwiczenia raz na tydzień, praca lekka)
              </option>
              <option value="1.4">
                Umiarkowana(średnio intensywne ćw. 2 razy w tygodniu)
              </option>
              <option value="1.6">
                Duża (dość ciężki trening kilka razy w tyg.)
              </option>
              <option value="1.8">
                Bardzo duża (4 cieżkie treningi w tyg. praca fizyczna)
              </option>
            </select>
            <h2 className="text-3xl text-black font-bold font-abhaya  justify-start ">
              Cel diety{" "}
            </h2>
            <select
              className="font-abhaya font-bold text-2xl text-black py-2 px-4 w-2/3 bg-ziel1 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:border-emerald-700 focus:ring focus:ring-emerald-600 focus:ring-opacity-50 "
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="" disabled>
                Wybierz co chcesz osiągnąć
              </option>
              <option value="1.2">Szybkie zwiększenie masy</option>
              <option value="1.1">Zwiększenie masy</option>
              <option value="1.0">Utrzymanie obecnej wagi</option>
              <option value="0.9">Odchudzanie</option>
              <option value="0.8">Szybkie odchudzanie</option>
            </select>
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 px-10 ">
              <div></div>
              <button
                onClick={handleCalculate}
                className="mb-20 bg-ziel2 hover:bg-gray-800 text-white text-3xl py-2 text-center shadow-lg rounded-2xl font-abhaya"
              >
                Oblicz
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-4/5 bg-white rounded p-6 py-40 float-left shadow-lx4">
          <div className="font-bold text-gray-700  text-7xl font-abhaya text-center mb-20">
            {calories !== null ? `${calories} kcal` : "0000 kcal"}
          </div>
          <p className="text-gray-700  text-4xl text-center font-abhaya">
            Tyle wynosi twoje dzienne zapotrzebowanie kaloryczne, aby osiągnąć
            podany cel.
          </p>
        </div>
      </div>
    </div>
  );
}
