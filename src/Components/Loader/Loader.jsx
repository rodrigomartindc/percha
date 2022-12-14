import React from "react";
import { Ring } from "@uiball/loaders";

function Loader(props) {
  return <Ring
  size={30}
  lineWeight={5}
  speed={2} 
  color="black" 
  {...props} />;
}

export default Loader;
