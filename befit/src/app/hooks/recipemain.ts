import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface GetRecipeMainData {
  id: number;
  nazwa: string;
}

export async function getRecipeMainDetails(): Promise<
  GetRecipeMainData[] | string
> {
  try {
    const response: AxiosResponse<GetRecipeMainData[] | string> =
      await appAPI.get(`/api/przepisy`, {
        withCredentials: true,
      });

    if (typeof response.data === "string") {
      console.error("Wystąpił błąd podczas pobierania szczegółów przepisów");
      return "Wystąpił błąd podczas pobierania szczegółów przepisów";
    } else {
      console.log("Przepisy pobrano poprawnie!");
      return response.data;
    }
  } catch (error: any) {
    console.error("Wystąpił błąd podczas pobierania szczegółów przepisów");
    return "Wystąpił błąd podczas pobierania szczegółów przepisów";
  }
}
