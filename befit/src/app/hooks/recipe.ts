import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface RecipeDetails {
  id: number;
  nazwa: string;
  zdjecie_sciezka: string;
  przygotowanie: string;
  skladniki: { skladnik: string }[]; // Zakładamy, że składniki są obiektami z właściwością "nazwa"
}

export async function getRecipeDetailsById(id: number): Promise<RecipeDetails | string> {
    try {
      const response: AxiosResponse<RecipeDetails | string> = await appAPI.get(`/api/przepisy/${id}`, {
        withCredentials: true,
      });
  
      if (typeof response.data === "string") {
        console.error("Wystąpił błąd podczas pobierania szczegółów przepisu");
        return "Wystąpił błąd podczas pobierania szczegółów przepisu";
      } else {
        console.log("Szczegóły przepisu pobrano poprawnie!");
        return response.data;
      }
    } catch (error: any) {
      console.error("Wystąpił błąd podczas pobierania szczegółów przepisu");
      return "Wystąpił błąd podczas pobierania szczegółów przepisu";
    }
  }
  