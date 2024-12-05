import React from "react";
import { P, Title1, Title2, Title3 } from "./typographie";

interface InfoProps {
  data: {
    title: string;
    content: string;
  };
}

function InfoComponents({ data }: InfoProps) {
  return (
    <div className=" flex-col space-y-10 shadow-md rounded-md">
      <div className="">
        <Title3 className=" text-left p-5">{data.title}</Title3>
      </div>
      <div className="">
        <P className=" text-left p-5">{data.content}</P>
      </div>
    </div>
  );
}

export default InfoComponents;
