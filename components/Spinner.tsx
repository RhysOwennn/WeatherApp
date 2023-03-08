import React from "react";
import spinnner from "../public/spinner.gif";
import Image from "next/image";

const Weather = () => (
  <Image className="w-[200px] m-auto block" src={spinnner} alt="loading" />
);

export default Weather;
