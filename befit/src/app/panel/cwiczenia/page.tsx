"use client";
import { submitExercise, ExerciseData } from "@/app/hooks/exercisePOST";
import { MyButton } from "@/components/common/ButtonAdminPanel";
import React, { useState } from "react";
import { FiAlertCircle, FiLoader } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";

const ExerciseForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      event.target.value = "";
      setSelectedFile(file);
    }
  };
  const handleReset = () => {
    setSelectedFile(null);
    setTitle("");
    setLink("");
    setSelectedCategory("");
    setError(null);
    setSuccess(false);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const exerciseData: ExerciseData = {
      title: title,
      kategoria: selectedCategory,
      link: link,
      image: selectedFile,
    };

    console.log("Wysłane dane:", exerciseData);

    setLoading(true);
    setError(null);
    setSuccess(false);

    const result = await submitExercise(exerciseData);

    if (result === "Ćwiczenie zostało dodane pomyślnie") {
      console.log("Ćwiczenie dodano pomyślnie!");
      handleReset();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      console.error(result);
      setError(result);
    }
    setLoading(false);
  };
  const categories = [
    { display: "Joga", value: "Joga" },
    { display: "Ćwiczenia taneczne", value: "Ćwiczenia taneczne" },
    { display: "Ćwiczenia na brzuch", value: "Ćwiczenia na brzuch" },
    {
      display: "Ćwiczenia na pośladki i nogi",
      value: "Ćwiczenia na pośladki i nogi",
    },
    { display: "Ćwiczenia cardio", value: "Cardio" },
  ];
  return (
    <div className=" flex flex-col bg-gradient-to-b from-white from-10% to-[#b8ccc4] to-90% text-black font-abhaya px-28">
      <form onSubmit={handleSubmit}>
        <h1 className="uppercase text-4xl font-semibold ml-20 mt-3 mb-7">
          Dodawanie ćwiczeń:
        </h1>
        <div className="flex flex-row ">
          <div className="flex flex-col bg-white justify-center items-center drop-shadow-xl mr-10 h-full">
            {selectedFile ? (
              <div className="flex flex-col w-[35.5rem] h-80 items-center justify-center m-4">
                <h2 className="text-xl mb-2">Wybrane zdjęcie:</h2>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Wybrane zdjęcie"
                  className="border-2 border-black/40 border-dotted mb-2"
                />
              </div>
            ) : (
              <div className="w-[35.5rem] h-80 bg-ziel1 m-4 border-2 border-black/40 border-dotted flex justify-center items-center flex-col">
                <h2 className="text-lg">Brak wybranego zdjęcia</h2>
                <h2 className="text-base">
                  (zalecany rozmiar: 1280 x 720 pikseli)
                </h2>
              </div>
            )}
            <div className="relative mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
              <button
                type="button"
                className="bg-ziel2 hover:bg-ziel2/85 text-white font-bold py-2 px-4 rounded cursor-pointer mb-4"
              >
                Dodaj zdjęcie
              </button>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none border-2 border-black/40 border-dotted w-[95%] py-2 px-3 text-black leading-tight focus:outline-none text-3xl mb-4"
              placeholder="Dodaj tytuł filmu"
            />
          </div>
          <div className="flex flex-col w-3/4">
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="appearance-none border-2 border-black/40 border-dotted w-full py-2 px-3 text-black leading-tight focus:outline-none text-3xl mb-4"
              placeholder="Dodaj link do ćwiczeń"
            />
            <div className="bg-white/70 p-4 flex flex-col">
              <h1 className="uppercase text-3xl pt-2 pb-5">
                Wybierz kategorię:
              </h1>
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.value}
                  className={`p-2 m-1 rounded-lg border-2 border-black  text-3xl transition-all ease-out duration-200 text-left hover:bg-gray-200 ${
                    selectedCategory === category.value
                      ? "bg-ziel2 text-white hover:bg-ziel2"
                      : "bg-white"
                  }`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.display}
                </button>
              ))}
            </div>
            <div className="flex flex-row justify-end gap-5 mt-2">
              {error && error !== null && (
                <p className="text-red-500 flex justify-center items-center text-xl font-bold gap-3">
                  <FiAlertCircle className="text-3xl" />
                  Wystąpił problem z przesłaniem ćwiczenia!
                </p>
              )}
              {success && (
                <p className="text-ziel2 flex justify-center items-center text-xl font-bold gap-3">
                  <GrStatusGood className="text-3xl" />
                  Ćwiczenie dodano pomyślnie!
                </p>
              )}
              {loading && (
                <p className="text-ziel2 flex justify-center items-center text-xl font-bold gap-3">
                  <FiLoader className="text-3xl" />
                  Wysyłanie...
                </p>
              )}
              <MyButton className="px-8 py-2 text-xl my-5" type="submit">
                <p className="">Zapisz</p>
              </MyButton>
              <MyButton
                className="px-8 py-2 font-medium text-xl my-5"
                type="button"
                onClick={handleReset}
              >
                <p className="">Anuluj</p>
              </MyButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExerciseForm;
