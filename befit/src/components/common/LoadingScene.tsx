import React from "react";

const LoadingScene = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-12 p-10 bg-gradient-to-t from-ziel2 to-ziel1 drop-shadow-2xl rounded-2xl">
      <div className="loader drop-shadow-2xl"></div>
      <p className="font-semibold text-xl text-white drop-shadow-2xl">
        Ładowanie danych...
      </p>
    </div>
  );
};

export default LoadingScene;
