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

// export async function submitRecipe(data: RecipeData) {
//   // const formData = new FormData();
//   // formData.append("nazwa", data.nazwa);
//   // formData.append("przygotowanie", data.przygotowanie);

//   // data.skladniki.forEach((ingredient) => {
//   //   formData.append("skladnik", ingredient.skladnik);
//   // });

//   // if (data.image) {
//   //   formData.append("image", data.image);
//   // }

//   try {
//     // console.log("Wysyłane dane:", data);
//     // const formData = new FormData();
//     // formData.append("file", data.image || new File([], "plik"));

//     const formData: RecipeData = {
//       nazwa: data.nazwa,
//       skladniki: data.skladniki,
//       przygotowanie: data.przygotowanie,
//       image: data.image, // Pobieramy plik z formData
//     };
//     const response: AxiosResponse<void> = await appAPI.post(
//       `/api/przepisy`,
//       formData,
//       {
//         withCredentials: true,
//       }
//     );
//   } catch (error: any) {
//     console.error("Wystąpił błąd podczas przesyłania przepisu", error.message);
//     console.error("Szczegóły błędu:", error);
//     return `Wystąpił błąd podczas przesyłania przepisu: ${error.message}`;
//   }
// }

// import { appAPI } from "@/utils/appAPI";
// import { AxiosResponse } from "axios";

// export interface Ingredient {
//   skladnik: string;
// }

// export interface RecipeData {
//   nazwa: string;
//   skladniki: Ingredient[];
//   przygotowanie: string;
//   image: File | null;
// }

// export async function submitRecipe(data: RecipeData): Promise<string> {
//   const formData = new FormData();
//   formData.append("nazwa", data.nazwa);
//   formData.append("przygotowanie", data.przygotowanie);

//   data.skladniki.forEach((ingredient, index) => {
//     formData.append(`skladniki[${index}][skladnik]`, ingredient.skladnik);
//   });

//   if (data.image) {
//     formData.append("image", data.image);
//   }

//   try {
//     console.log("Wysyłane dane:", Array.from(formData.entries()));

//     const response: AxiosResponse<string> = await appAPI.post(
//       `/api/przepisy`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       }
//     );

//     return response.data;
//   } catch (error: any) {
//     console.error("Wystąpił błąd podczas przesyłania przepisu", error.message);
//     console.error("Szczegóły błędu:", error.response.data);
//     return `Wystąpił błąd podczas przesyłania przepisu: ${error.message}`;
//   }
// }
export async function submitRecipe(recipeData: RecipeData): Promise<string> {
  try {
    const formData = new FormData();
    formData.append("nazwa", recipeData.nazwa);
    // formData.append("skladniki", JSON.stringify(recipeData.skladniki));
    recipeData.skladniki.forEach((ingredient, index) => {
      formData.append(`skladniki[${index}].skladnik`, ingredient.skladnik);
    });
    formData.append("przygotowanie", recipeData.przygotowanie);
    if (recipeData.image) {
      formData.append("image", recipeData.image);
    }
    console.log(formData);

    const response: AxiosResponse<string> = await appAPI.post(
      `/api/przepisy`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
