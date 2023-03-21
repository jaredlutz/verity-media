import { createContext, useContext } from "react";

export type JumboTronData = {
  title: string;
  subTitle: string;
  imageURL: string;
  direction: string;
  height: number;
  width: number;
};

interface IJumbotronContext {
  item: JumboTronData;
}

const JumbotronContext = createContext<IJumbotronContext | null>(null);

export const useJumbotronItemData = () => {
  const ctx = useContext(JumbotronContext);

  if (!ctx) {
    throw new Error("Must use inside Jumbotron Component");
  }

  return ctx;
};

export default JumbotronContext;
