import { P, Title4 } from "@/components/typographie";
import Human from "../../assets/human.png";

function Home() {
  return (
    <div className=" flex">
      <div
        className="w-1/2"
        style={{
          width: "50vw",
          height: "150vh",
          backgroundImage: `url(${Human})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      ></div>
      <div>
        <div>
          <Title4>Salut</Title4>
          <P>Je suis un</P>
        </div>
      </div>
    </div>
  );
}

export default Home;
