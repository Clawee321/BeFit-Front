"use client";

import Image from "next/image"
import LoadingScene from "@/components/common/LoadingScene";
  
import { useQuery } from 'react-query';
import { getRecipeDetailsById, RecipeDetails } from '@/app/hooks/recipe';

import { useParams } from "next/navigation";

export default function Przepis() {
  const { recipeid } = useParams(); 
  const recipeId = Number(recipeid);
    const {
      data: recipeData,
      isLoading: recipeMainLoading,
      isError: recipeError,
    } = useQuery(["recipe", recipeId], () => getRecipeDetailsById(recipeId));

    return (
      <div className="flex justify-center items-center">
        {!recipeMainLoading && !recipeError && typeof recipeData !== "string" && recipeData ? (
          <>
            <div className="text-black" style={{ background: "linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)", }} >
              <h1 className="text-center font-semibold text-4xl py-10">{recipeData.nazwa}</h1>
              <div className="flex">
                <div className="w-1/4 p-10 flex justify-center items-center">
                  <div className="bg-white h-80 w-80 shadow-lg"
                  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image
                      src={`data:image/png;base64,${recipeData.image}`}
                      alt="Smacznego!"
                      width={900}
                      height={650}
                    />
                    </div>
                    <h2 className="text-3xl font-medium px-4 font-abhaya">
                    Smacznego!
                  </h2>
                  </div>
                </div>
                <div className="w-3/4 pl-4 mr-36 mb-10">
                  <div className="bg-white h-80% shadow-lg p-6" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <h1 className="text-2xl font-semibold">Składniki:</h1>
                    <ul>
                      {recipeData.skladniki.map((skladnik, index) => (
                        <li key={index}>{`- ${skladnik.skladnik}`}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white h-80% shadow-lg mt-4 p-6" style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <h1 className="text-2xl font-semibold">Sposób przygotowania:</h1>
                    {recipeData.przygotowanie}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (<div className="flex justify-center items-center">
          <LoadingScene />
        </div>)
        }
      </div>
    )
}
