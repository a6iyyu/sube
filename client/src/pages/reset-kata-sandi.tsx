import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { WebsiteMeta } from "~/common/website-meta";
import { ResetPasswordForm } from "~/components/akun/reset-kata-sandi";

export const ResetKataSandi: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const CheckUser = async () => {
      try {
        const request_params = new URLSearchParams(location.search);
        const username = request_params.get("username");
        const email = request_params.get("email");
        if (!username || !email) return navigate("/lupa-kata-sandi");

        const response = await axios.get("http://localhost:2001/auth/lupa-kata-sandi", {
          params: { username, email },
          withCredentials: true,
        });
        if (response.status === 200) navigate("/reset-kata-sandi");
      } catch (e) {
        axios.isAxiosError(e) && e.response?.status === 404 ? navigate("/lupa-kata-sandi") : console.error(e);
      }
    };

    CheckUser();
  }, [location.search, navigate]);

  return (
    <>
      <WebsiteMeta title="Atur Ulang Kata Sandi Anda" description="" />
      <ResetPasswordForm />
    </>
  );
};