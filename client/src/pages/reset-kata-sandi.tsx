import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WebsiteMeta } from "~/common/website-meta";
import { ResetPasswordForm } from "~/components/akun/reset-kata-sandi";

export const ResetKataSandi: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const CheckUser = async () => {
      try {
        const response = await axios.get("http://localhost:2001/auth/lupa-kata-sandi", {
          withCredentials: true,
        });
        if (response.status === 404) navigate("/lupa-kata-sandi");
      } catch (e) {
        navigate("/lupa-kata-sandi");
        throw e;
      }
    };

    CheckUser();
  }, [navigate]);

  return (
    <>
      <WebsiteMeta title="Atur Ulang Kata Sandi Anda" description="" />
      <ResetPasswordForm />
    </>
  );
};