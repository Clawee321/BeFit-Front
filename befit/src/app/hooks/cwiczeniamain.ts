import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";


export interface GetExerciseData {
  id: number;
  video: string;
  kategoria: string;
  image: string;
}


type Category = 'joga' | 'taniec' | 'brzuch' | 'pośladkinogi' | 'cardio';


export async function getExerciseData(category: Category): Promise<GetExerciseData[] | string> {
  try {
    
    const response: AxiosResponse<GetExerciseData[] | string> = await appAPI.get(`/api/cwiczenia`, {
      withCredentials: true,
    });

    
    if (typeof response.data === "string") {
      console.error("Wystąpił błąd podczas pobierania danych ćwiczeń");
      return "Wystąpił błąd podczas pobierania danych ćwiczeń";
    } else {
      console.log("Dane ćwiczeń pobrano poprawnie!");
      return response.data;
    }
  } catch (error: any) {
    
    console.error("Wystąpił błąd podczas pobierania danych ćwiczeń:", error.message);
    return "Wystąpił błąd podczas pobierania danych ćwiczeń";
  }
}
