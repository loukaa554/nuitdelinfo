import { Title1 } from "./typographie";
import NumberTicker from "@/components/ui/number-ticker";

interface InfoProps {
  data: {
    title: string;
    number: number;
  };
}

function InfoComponents({ data }: InfoProps) {
  return (
    <div className=" relative pt-40 mx-20">
      <div className="flex flex-col">
        <Title1 className=" text-left">
          Vous savez combien représentent les océans de la surface de la Terre ?
        </Title1>
        <Title1
          className=" text-right text-[#3A2EE7] right-0  "
          style={{ fontSize: 148 }}
        >
          <NumberTicker value={data.number} className="text-[#3A2EE7]" />%
        </Title1>
      </div>
    </div>
  );
}

export default InfoComponents;
