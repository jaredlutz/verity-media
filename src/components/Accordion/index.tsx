"use client";
import { useState } from "react";
import { Content } from "./Content";
import AccordionContext from "./context";
import { Item } from "./Item";
import { Title } from "./Title";

export type ChildrenProp = {
  children?: React.ReactNode;
};

const Accordion = ({ children }: ChildrenProp) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
      <div className="flex flex-col w-full gap-2">{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;

// :root {
//   --foreground-rgb: 0, 0, 0;
//   --background-start-rgb: 214, 219, 220;
//   --background-end-rgb: 255, 255, 255;
// }

// @media (prefers-color-scheme: dark) {
//   :root {
//     --foreground-rgb: 255, 255, 255;
//     --background-start-rgb: 0, 0, 0;
//     --background-end-rgb: 0, 0, 0;
//   }
// }

// body {
//   color: rgb(var(--foreground-rgb));
//   background: linear-gradient(
//       to bottom,
//       transparent,
//       rgb(var(--background-end-rgb))
//     )
//     rgb(var(--background-start-rgb));
// }
