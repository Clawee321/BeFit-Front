import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface Ingredient {
  skladnik: string;
}

export interface RecipeData {
  nazwa: string;
  skladniki: Ingredient[];
  przygotowanie: string;
  image: File | null;
}

export async function submitRecipe(recipeData: RecipeData): Promise<string> {
  try {
    const { image, ...recipeWithoutImage } = recipeData;
    const formData = new FormData();

    formData.append("przepis", JSON.stringify(recipeWithoutImage));
    if (image) {
      formData.append("image", image);
    }
    console.log(formData);

    const response: AxiosResponse<string> = await appAPI.post(
      `/api/przepisy`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    if (response.status !== 200) {
      throw new Error("Błąd podczas wysyłania danych");
    }

    return "Przepis został dodany pomyślnie";
  } catch (error: any) {
    console.error("Wystąpił błąd podczas przesyłania przepisu", error.message);
    return error.message;
  }
}
