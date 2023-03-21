"use client";
import { Content } from "./Content";
import JumbotronContext, { JumboTronData } from "./context";
import { JumboImage } from "./Image";
import { Pane } from "./Pane";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export type ChildrenProp = {
  children?: React.ReactNode;
};

type JumbotronProp = {
  item: JumboTronData;
} & ChildrenProp;

const Jumbotron = ({ children, item }: JumbotronProp) => {
  return (
    <JumbotronContext.Provider value={{ item }}>
      {children}
    </JumbotronContext.Provider>
  );
};

Jumbotron.Pane = Pane;
Jumbotron.Content = Content;
Jumbotron.Title = Title;
Jumbotron.Subtitle = Subtitle;
Jumbotron.Image = JumboImage;

export default Jumbotron;
