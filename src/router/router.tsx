import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/404";
import { IndexPage } from "../pages/index";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={IndexPage} />
      </Routes>
    </BrowserRouter>
  );
};