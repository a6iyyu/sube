import React, { useEffect, useState } from "react";
import { Notifikasi } from "~/common/notification";
import { Users } from "~/types/users";
import { MengambilDataPengguna } from "~/utils/mengambil-data-pengguna";
import { MembalikkanTanggal } from "~/utils/membalikkan-tanggal";

export const ProfilPengguna: React.FC = () => {
  const [getUserData, setGetUserData] = useState<Users | null>(null);
  const [showNotification, setShowNotification] = useState<{ showMessage: string, isVisible: boolean }>({ showMessage: "", isVisible: false });

  useEffect(() => {
    MengambilDataPengguna(setGetUserData, setShowNotification);
  }, []);

  return (
    <main id={getUserData?.id_user} className="mx-auto mt-24 flex h-fit w-4/5 flex-col items-center gap-y-8 text-slate-50 lg:mt-32 lg:flex-row lg:gap-x-12 lg:gap-y-0">
      {showNotification.isVisible && <Notifikasi title={showNotification.showMessage} onclose={() => setShowNotification({ ...showNotification, isVisible: false })} />}
      <span className="absolute right-0 top-24 z-0 h-40 w-40 bg-[#ff85ad] [filter:blur(8rem)]" />
      <section className="flex h-full w-1/2 items-center justify-end lg:w-1/4">
        <label htmlFor={`profile-picture-${getUserData?.username}`} className="flex h-full w-full cursor-pointer items-center justify-center">
          <img src={getUserData?.dashboard?.profile_picture || "/blank-profile-picture.webp?url"} alt={getUserData?.username} className="h-full w-full rounded-full object-cover" />
        </label>
        <input type="file" accept="image/*" id={`profile-picture-${getUserData?.username}`} className="hidden" />
      </section>
      <section className="flex h-full w-full cursor-default flex-col justify-center lg:w-3/4">
        <h4 className="text-2xl font-semibold">@{getUserData?.username}</h4>
        <h4 className="mt-2 italic">
          {getUserData?.dashboard?.nationality || "🇮🇩\u2002Indonesia"}
        </h4>
        <h4 className="mt-2 italic">
          {`Pengguna ini bergabung pada ${getUserData?.created_at ? MembalikkanTanggal(getUserData?.created_at) : "01-01-1970"}` || "Tanggal tidak valid."}
        </h4>
        <h4 className="mt-6 italic">
          {getUserData?.dashboard?.bio || "Lorem Ipsum Dolor Sit Amet."}
        </h4>
        <h4 className="mt-2 h-fit w-fit cursor-pointer text-base text-blue-500 transition-all duration-300 lg:hover:text-blue-400 lg:hover:underline">
          <i className="fa-solid fa-pencil" />
          &ensp;Edit
        </h4>
      </section>
    </main>
  );
};