import { MouseEvent } from "react";

const HandleMouseEnter = (e: MouseEvent<HTMLElement | MouseEvent>) => {
  (e.target as HTMLElement).style.transform = "scale(1.25)";
};

const HandleMouseLeave = (e: MouseEvent<HTMLElement | MouseEvent>) => {
  (e.target as HTMLElement).style.transform = "scale(1)";
};

const Headline = (Text: string | null, HandleMouseEnter: (e: MouseEvent<HTMLElement | MouseEvent>) => void, HandleMouseLeave: (e: MouseEvent<HTMLElement | MouseEvent>) => void) => {
  return Text?.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block transform tracking-wide duration-200 ease-in-out"
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

export { HandleMouseEnter, HandleMouseLeave, Headline };