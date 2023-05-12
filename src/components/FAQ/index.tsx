import Accordion from "../Accordion";

const data = [
  {
    item: "What is netflux?",
    content:
      "netflux is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    item: "How much does netflux cost?",
    content:
      "Watch netflux on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    item: "Where can I watch?",
    content:
      "Watch anywhere, anytime. Sign in with your netflux account to watch instantly on the web at netflux.com from your personal computer or on any internet-connected device that offers the netflux app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take netflux with you anywhere.",
  },
  {
    item: "How do I cancel?",
    content:
      "netflux is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    item: "What can I watch on netflux?",
    content:
      "netflux has an extensive library of feature films, documentaries, TV shows, anime, award-winning netflux originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    item: "Is netflux good for kids?",
    content:
      "The netflux Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-black px-8 py-12">
      <h2 className="text-center text-5xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <Accordion>
          {data.map((item, i) => {
            return (
              <Accordion.Item key={i}>
                <Accordion.Title value={`item-${i}`}>
                  {item.item}
                </Accordion.Title>
                <Accordion.Content value={`item-${i}`}>
                  {item.content}
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
