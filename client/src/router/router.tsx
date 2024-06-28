import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "~/pages/404";
import { Indeks } from "~/pages/index";
import { Blog } from "~/pages/blog";
import { Dashboard } from "~/pages/dashboard";
import { DetailKaroselBlog } from "~/pages/detail-karosel-blog";
import { DetailTabelBlog } from "~/pages/detail-tabel-blog";
import { FAQ } from "~/pages/faq";
import { Kursus } from "~/pages/kursus";
import { Masuk } from "~/pages/masuk";
import { Registrasi } from "~/pages/registrasi";
import { Tantangan } from "~/pages/tantangan";
import { TentangKami } from "~/pages/tentang-kami";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={Indeks} />
        <Route path="/blog" Component={Blog} />
        <Route path="/blog/:slug" Component={DetailKaroselBlog} />
        <Route path="/blog/:title" Component={DetailTabelBlog} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/faq" Component={FAQ} />
        <Route path="/kursus" Component={Kursus} />
        <Route path="/masuk" Component={Masuk} />
        <Route path="/registrasi" Component={Registrasi} />
        <Route path="/tantangan" Component={Tantangan} />
        <Route path="/tentang-kami" Component={TentangKami} />
      </Routes>
    </BrowserRouter>
  );
};