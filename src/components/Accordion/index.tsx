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
      <div className="flex w-full flex-col gap-2">{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = Item;
Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
