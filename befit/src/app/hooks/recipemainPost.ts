import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface Ingredient {
  skladnik: string;
}

export interface RecipeData {
  nazwa: string;
  skladniki: Ingredient[];
  przygotowanie: string;
  image: File;
}

export async function submitRecipe(data: RecipeData) {
  // const formData = new FormData();
  // formData.append("nazwa", data.nazwa);
  // formData.append("przygotowanie", data.przygotowanie);

  // data.skladniki.forEach((ingredient) => {
  //   formData.append("skladnik", ingredient.skladnik);
  // });

  // if (data.image) {
  //   formData.append("image", data.image);
  // }

  try {
    console.log("Wysyłane dane:", data);
    const formData = new FormData();
    formData.append("file", data.image || new File([], "plik"));

    const adasd: RecipeData = {
      nazwa: data.nazwa,
      skladniki: data.skladniki,
      przygotowanie: data.przygotowanie,
      image: data.image, // Pobieramy plik z formData
    };
    const response: AxiosResponse<void> = await appAPI.post(
      `/api/przepisy`,
      adasd,
      {
        withCredentials: true,
      }
    );
  } catch (error: any) {
    console.error("Wystąpił błąd podczas przesyłania przepisu", error.message);
    console.error("Szczegóły błędu:", error);
    return `Wystąpił błąd podczas przesyłania przepisu: ${error.message}`;
  }
}
