import InfoComponents from "../../components/info";

function Home() {
  const infos = [
    {
      title:
        "Vous savez que les océans représentent 71% de la surface de la Terre ?",
    },
  ];

  return (
    <div className="Home inner ">
      {infos.map((info, index) => (
        <div className=" mt-10">
          <InfoComponents key={index} />
        </div>
      ))}
    </div>
  );
}

export default Home;
