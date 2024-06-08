"use client";

import React from "react";

const page = () => {
  const onClickEventPrzepisy = () => (window.location.href = "/panel/przepisy");
  const onClickEventCwiczenia = () =>
    (window.location.href = "/panel/cwiczenia");
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 text-ziel2">
      <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full items-center justify-center">
        <h1 className="text-2xl font-bold pb-8">
          Wybierz sekcje do której chcesz dodać coś nowego
        </h1>
        <div className="flex flex-row gap-5">
          <button
            className="bg-ziel2 hover:bg-ziel2/85 text-white  p-4 rounded-full "
            onClick={onClickEventPrzepisy}
          >
            Przepisy
          </button>
          <button
            className="bg-ziel2 hover:bg-ziel2/85 text-white  p-4 rounded-full"
            onClick={onClickEventCwiczenia}
          >
            Ćwiczenia
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
