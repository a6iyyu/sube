import React from "react";
import { Link } from "react-router-dom";

export const NotReadyPage: React.FC = () => {
  return (
    <main className="mx-auto mb-60 mt-28 flex w-4/5 flex-col items-center justify-between text-gray-50 lg:flex-row">
      <img src="/not-ready.png?url" alt="Sorry, this page isn't ready!" className="font-semibold transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
      <section className="mt-8 flex h-full w-full cursor-default flex-col items-center justify-center text-gray-50 lg:mt-0 lg:w-1/2 lg:items-start">
        <p className="h-fit w-fit text-4xl font-bold lg:text-5xl">Oops!</p>
        <p className="mt-2 h-fit w-fit text-3xl font-medium lg:text-4xl">
          Halaman ini belum siap.
        </p>
        <br />
        <p className="text-justify text-lg font-normal lg:text-2xl">
          Kami bekerja keras untuk menyiapkan halaman ini. Terima kasih atas
          kesabaran Anda!
        </p>
        <br />
        <br />
        <Link to="/" className="flex h-fit w-fit cursor-pointer items-center justify-between rounded-full bg-gray-200 py-2 pl-3 pr-8 transition-all duration-300 ease-in-out hover:bg-gray-300">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gray-950 text-xl text-gray-50 transition-all duration-300 ease-in-out [transform:rotate(225deg)] hover:bg-gray-800 hover:text-gray-200">
            &#10132;
          </div>
          <h5 className="ml-4 text-lg font-bold text-gray-950">Drift Home</h5>
        </Link>
      </section>
    </main>
  );
};