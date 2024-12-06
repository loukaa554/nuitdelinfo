import Podcasts from "@/components/podcasts";
import InfoComponents from "../../components/info";
import Hero from "@/components/Hero";
import Apropos from "@/components/Apropos";

function Home() {
  const infos = [
    {
      title:
        "Vous savez que les océans représentent 71% de la surface de la Terre ?",
      number: 71,
    },
    {
      title:
        "Vous savez que les océans représentent 71% de la surface de la Terre ?",
      number: 71,
    },
  ];
  return (
    <div className="flex flex-col">
      <Hero />
      <Podcasts />
      {infos.map((info, index) => (
        <div className=" mt-10">
          <InfoComponents data={info} key={index} />
        </div>
      ))}
      <Apropos />
    </div>
  );
}

export default Home;
