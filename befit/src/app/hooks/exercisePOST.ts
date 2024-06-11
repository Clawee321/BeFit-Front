import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface ExerciseData {
  link: string;
  kategoria: string;
  title: string;
  image: File | null;
}

export async function submitExercise(
  exerciseData: ExerciseData
): Promise<string> {
  try {
    const { image, ...exerciseWithoutImage } = exerciseData;
    const formData = new FormData();

    formData.append("cwiczenie", JSON.stringify(exerciseWithoutImage));
    if (image) {
      formData.append("image", image);
    }
    console.log(formData);

    const response: AxiosResponse<string> = await appAPI.post(
      `/api/cwiczenia`,
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

    return "Ćwiczenie zostało dodane pomyślnie";
  } catch (error: any) {
    console.error("Wystąpił błąd podczas przesyłania ćwiczenia", error.message);
    return error.message;
  }
}
