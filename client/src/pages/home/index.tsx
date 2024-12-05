import InfoComponents from "../../components/info";

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
    <div className="Home inner ">
      {infos.map((info, index) => (
        <div className=" mt-10">
          <InfoComponents data={info} key={index} />
        </div>
      ))}
    </div>
  );
}

export default Home;
