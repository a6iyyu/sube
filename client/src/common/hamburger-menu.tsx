import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HamburgerAnimated = styled.div`
  & {
    animation: fade-down 300ms ease-in-out;
  }
  @keyframes fade-down {
    from {
      transform: translateY(-1.5rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus: string[] = ["Blog", "Kursus", "Tantangan", "Registrasi"];

  useEffect(() => {
    const HandleOutside = (e: MouseEvent) => (!(e.target as HTMLElement).closest(".hamburger-menu")) && setOpen(false);
    document.body.addEventListener("click", HandleOutside);
    return () => document.body.removeEventListener("click", HandleOutside);
  }, [open]);

  return (
    <section className="hamburger-menu flex h-full w-3/5 items-center justify-end lg:hidden">
      <i className="fa-solid fa-bars cursor-pointer text-2xl text-gray-50" onClick={() => setOpen(!open)} />
      {open &&
        <HamburgerAnimated className="absolute top-24 z-50 h-fit w-fit rounded-xl bg-slate-50">
          {menus.map((menu, i: number) =>
            <Link key={i} to={`/${menu.replace(/ /g, "-").toLowerCase()}`} className="grid h-full w-full cursor-pointer place-items-center px-10 py-5 font-semibold text-slate-950 transition-all duration-300 ease-in-out first:rounded-t-xl last:rounded-b-xl hover:bg-slate-200 first:hover:rounded-t-xl last:hover:rounded-b-xl">
              {menu}
            </Link>
          )}
        </HamburgerAnimated>
      }
    </section>
  );
};