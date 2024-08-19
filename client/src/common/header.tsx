import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { HamburgerMenu } from "./hamburger-menu";

const NavHover = styled.section`
  a:hover {
    filter: blur(0);
    transform: scale(1.05);
  }
  &:hover a:not(:hover) {
    transform: scale(0.95);
    filter: blur(0.1rem);
  }
`;

export const Header: React.FC = () => {
  const Menus: string[] = ["Blog", "Kursus", "Tantangan", "Registrasi"];

  return (
    <header className="mx-auto flex h-28 w-4/5 justify-between text-slate-50 lg:h-36">
      <section className="flex h-full w-1/5 items-center lg:w-1/6">
        <Link to={"/"} className="grid h-full w-full place-items-center font-semibold">
          <img src="/logo.png?url" alt="Logo" className="object-contain" loading="lazy" />
        </Link>
      </section>
      <NavHover className="hidden h-full w-4/5 text-lg font-semibold lg:flex lg:w-5/6 lg:items-center lg:justify-end">
        {Menus.map((menu, i: number) =>
          <Link to={`/${menu.toLowerCase().replace(/ /g, "-")}`} key={i} className="mr-14 transition-all duration-300 ease-in-out last:mr-0 last:rounded-lg last:bg-slate-50 last:px-6 last:py-3 last:text-slate-950 hover:text-slate-200 hover:underline last:hover:bg-slate-200 last:hover:text-slate-800 last:hover:no-underline">
            {menu}
          </Link>
        )}
      </NavHover>
      <HamburgerMenu />
    </header>
  );
};