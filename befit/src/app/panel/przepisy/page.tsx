"use client";
import {
  submitRecipe,
  Ingredient,
  RecipeData,
} from "@/app/hooks/recipemainPost";
import { MyButton } from "@/components/common/ButtonAdminPanel";
import React, { useState } from "react";
import { FiAlertCircle, FiLoader } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";
const RecipeForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState("");
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
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "recipeName") setRecipeName(value);
    if (name === "ingredients") setIngredients(value);
    if (name === "instructions") setInstructions(value);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setRecipeName("");
    setIngredients("");
    setInstructions("");
    setError(null);
    setSuccess(false);
    console.log("Stany po resetowaniu:", {
      selectedFile,
      recipeName,
      ingredients,
      instructions,
      error,
      success,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ingredientsArray: Ingredient[] = ingredients
      .split(",")
      .map((item) => ({
        skladnik: item.trim(),
      }));
    const recipeData: RecipeData = {
      nazwa: recipeName,
      skladniki: ingredientsArray,
      przygotowanie: instructions,
      image: selectedFile,
    };

    console.log("Wysłane dane:", recipeData);

    setLoading(true);
    setError(null);
    setSuccess(false);

    const result = await submitRecipe(recipeData);

    if (result === "Przepis został dodany pomyślnie") {
      console.log("Przepis dodany pomyślnie!");
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

  return (
    <div className=" flex flex-col bg-gradient-to-b from-white from-10% to-[#b8ccc4] to-90% text-black font-abhaya px-28">
      <form onSubmit={handleSubmit}>
        <h1 className="uppercase text-4xl font-semibold ml-20 mt-3 mb-7">
          Dodawanie przepisów:
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
                  (zalecany rozmiar: 900 x 650 pikseli)
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
          <div className="flex flex-col w-3/4">
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              className="appearance-none border-2 border-black/40 border-dotted w-full py-2 px-3 text-black leading-tight focus:outline-none text-3xl mb-4"
              placeholder="Dodaj nazwę przepisu"
            />
            <div className="bg-white/70 p-4">
              <label className="block text-black text-2xl ">Składniki:</label>
              <p className="mb-2 text-sm">
                (poszczególne składniki, należy oddzielić przecinkiem)
              </p>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className=" appearance-none  w-full py-2 px-3 text-black leading-tight focus:outline-none border-2 border-black/40 border-dotted h-40"
                placeholder="Dodaj składniki"
              ></textarea>

              <label className="block text-black text-2xl mb-2">
                Sposób przygotowania:
              </label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className=" appearance-none  w-full py-2 px-3 text-black leading-tight focus:outline-none border-2 border-black/40 border-dotted h-40"
                placeholder="Dodaj sposób przygotowania"
              ></textarea>
            </div>
            <div className="flex flex-row justify-end gap-5 mt-2">
              {error && error !== null && (
                <p className="text-red-500 flex justify-center items-center text-xl font-bold gap-3">
                  <FiAlertCircle className="text-3xl" />
                  Wystąpił problem z przesłaniem przepisu!
                </p>
              )}
              {success && (
                <p className="text-ziel2 flex justify-center items-center text-xl font-bold gap-3">
                  <GrStatusGood className="text-3xl" />
                  Przepis dodany pomyślnie!
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

export default RecipeForm;
