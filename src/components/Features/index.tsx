import JumboData from "@/utils/constants/jumboData.json";
import Jumbotron from "../Jumbotron";

const Features = () => {
  return (
    <div className="flex w-full flex-col bg-black">
      {JumboData.map((item, i) => (
        <Jumbotron item={item} key={i}>
          <Jumbotron.Pane>
            <Jumbotron.Content>
              <Jumbotron.Title />
              <Jumbotron.Subtitle />
            </Jumbotron.Content>
            <Jumbotron.Image />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </div>
  );
};

export default Features;
