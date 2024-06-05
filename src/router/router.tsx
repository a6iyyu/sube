import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/404";
import { IndexPage } from "../pages/index";
import { AboutPage } from "../pages/about";
import { CoursePage } from "../pages/course";
import { SignUpPage } from "../pages/sign-up";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={IndexPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/course" Component={CoursePage} />
        <Route path="/sign-up" Component={SignUpPage} />
      </Routes>
    </BrowserRouter>
  );
};