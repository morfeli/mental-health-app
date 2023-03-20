import { useContext } from "react";
import { MindScapeContext } from "./mindscape-context";

export const useMindScapeContext = () => {
  const mindScapeCtx = useContext(MindScapeContext);

  return mindScapeCtx;
};
