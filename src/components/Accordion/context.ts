import { createContext, useContext } from "react";

interface IAccordionContext {
  activeItem: string | null;
  setActiveItem: (label: string | null) => void;
}

const AccordionContext = createContext<IAccordionContext | null>(null);

export const useAccordionTabs = () => {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Must use inside Accordion Component");
  }

  return ctx;
};

export default AccordionContext;
