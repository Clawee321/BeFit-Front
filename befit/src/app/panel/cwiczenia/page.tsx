"use client";
// import {
//   submitRecipe,
//   Ingredient,
//   RecipeData,
// } from "@/app/hooks/recipemainPost";
import { MyButton } from "@/components/common/ButtonAdminPanel";
import React, { useState } from "react";
import { FiAlertCircle, FiLoader } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";

const ExerciseForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const recipeData: RecipeData = {
    //   nazwa: recipeName,
    //   skladniki: ingredientsArray,
    //   przygotowanie: instructions,
    //   image: selectedFile,
    // };

    // console.log("Wysłane dane:", recipeData);

    // setLoading(true);
    // setError(null);
    // setSuccess(false);

    // const result = await submitRecipe(recipeData);

    // if (result === "Przepis został dodany pomyślnie") {
    //   console.log("Przepis dodany pomyślnie!");
    //   handleReset();
    //   setSuccess(true);
    //   setTimeout(() => {
    //     setSuccess(false);
    //   }, 5000);
    // } else {
    //   console.error(result);
    //   setError(result);
    // }
    // setLoading(false);
  };
  return (
    <div className=" flex flex-col bg-gradient-to-b from-white from-10% to-[#b8ccc4] to-90% text-black font-abhaya px-28">
      <form onSubmit={handleSubmit}>
        <h1 className="uppercase text-4xl font-semibold ml-20 mt-3 mb-7">
          Dodawanie ćwiczeń:
        </h1>
        <div className="flex flex-row ">
          <div className="flex flex-col bg-white justify-center items-center drop-shadow-xl mr-10 h-full">
            {selectedFile ? (
              <div className="flex flex-col w-72 h-80 items-center justify-center m-4">
                <h2 className="text-xl mb-2">Wybrane zdjęcie:</h2>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Wybrane zdjęcie"
                  className="border-2 border-black/40 border-dotted mb-2"
                />
              </div>
            ) : (
              <div className="w-72 h-80 bg-ziel1 m-4 border-2 border-black/40 border-dotted flex justify-center items-center flex-col">
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExerciseForm;
