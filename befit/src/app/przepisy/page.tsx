"use client";

import Image from "next/image";
import Link from "next/link";
import LoadingScene from "@/components/common/LoadingScene";


import { useQuery } from "react-query";
import {
  GetRecipeMainData,
  getRecipeMainDetails,
} from "@/app/hooks/recipemain";

export default function Przepisy() {
  const {
    data: recipeMainData,
    isLoading: recipeMainLoading,
    isError: recipeMainError,
  } = useQuery("recipemain", getRecipeMainDetails);
  console.log("recipeMainData:", recipeMainData);
  return (
    <div
      className="text-black"
      style={{
        background: "linear-gradient(to bottom, #ffffff 10%, #b8ccc4 90%)",
      }}
    >
      <h1 className="text-center text-black pt-8 text-2xl font-semibold font-abhaya">
        Przepisy na dania niskokaloryczne
      </h1>
      <div className="mx-12 mt-12 pb-16">
        <div className="grid grid-cols-4 gap-x-16 gap-y-14">
          {!recipeMainLoading &&
          !recipeMainError &&
          typeof recipeMainData !== "string" &&
          recipeMainData ? (
            <>
              {recipeMainData.map((przepis, index) => (
                <Link href={`/przepisy/przepis`} passHref key={index}>
                <div
                  key={index}
                  
                  className="bg-white h-80 w-80 shadow-lg"
                  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex justify-center px-4 pt-4 pb-4">
                    <Image
                      src={`data:image/png;base64,${przepis.image}`}
                      alt={przepis.nazwa}
                      width={900}
                      height={650}
                    />
                  </div>
                  <h2 className="text-2xl font-medium px-4 font-abhaya">
                    {przepis.nazwa}
                  </h2>
                  
                </div>
                </Link>
              ))}
            </>
          ) : (
            <div className="flex justify-center items-center">
              <LoadingScene />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
