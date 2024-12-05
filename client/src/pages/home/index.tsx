import { P, Title4 } from "@/components/typographie";
import Human from "../../assets/human.png";

function Home() {
  return (
    <div className=" flex">
      <div className="w-1/2">
        <img className="w-1/2 h-10" src={Human} alt="" />
      </div>
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
