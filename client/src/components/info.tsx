import { Title1, Title2 } from "./typographie";

interface InfoProps {
  data: {
    title: string;
  };
}

function InfoComponents() {
  return (
    <div className=" h-[100vh] flex justify-center items-center">
      <div className="flex flex-col">
        <Title1 className=" text-left">
          Vous savez combien représentent les océans de la surface de la Terre ?
        </Title1>
        <Title1
          className=" text-right text-[#3A2EE7] right-0  "
          style={{ fontSize: 148 }}
        >
          71%
        </Title1>
      </div>
    </div>
  );
}

export default InfoComponents;
