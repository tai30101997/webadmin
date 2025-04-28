import Sdk from "casdoor-js-sdk";
import { useMemo } from "react";
import { CassdoorSDK } from "./typedefs";
function createCasdoor(sdkConfig:CassdoorSDK) {
  const CasdoorSDK = new Sdk(sdkConfig);
  return CasdoorSDK ;
}
export function useCasdoor(sdkConfig:CassdoorSDK) {
  const casdoorConfig = useMemo(() => createCasdoor(sdkConfig), []);
  return casdoorConfig;
}