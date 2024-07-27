import React, { useEffect, useState } from "react";
import { Notifikasi } from "~/common/notification";
import { Users } from "~/types/users";
import { MengambilDataPengguna } from "~/utils/mengambil-data-pengguna";


export const ProfilPengguna: React.FC = () => {
  const [getUserData, setGetUserData] = useState<Users[]>([]);
  const [showNotification, setShowNotification] = useState<{ showMessage: string, isVisible: boolean }>({ showMessage: "", isVisible: false });

  useEffect(() => {
    MengambilDataPengguna(setGetUserData, setShowNotification);
  }, []);

  return (
    <main className="mx-auto mb-60 mt-24 h-fit w-4/5 text-slate-50 lg:mt-32">
      {showNotification.isVisible && <Notifikasi title={showNotification.showMessage} onclose={() => setShowNotification({ ...showNotification, isVisible: false })} />}
      <section>
        {getUserData?.map(user =>
          <h4 key={user.username}>{user.username}</h4>  
        )}
      </section>
    </main>
  );
};