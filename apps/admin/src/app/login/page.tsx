
"use client";
import { useEffect } from "react";
import { sdkConfig } from "../conf";
import { useCasdoor } from "@webadmin/casdoor";
const Login = () => {
  useEffect(() => {
    const CasdoorSDK = useCasdoor(sdkConfig);
    CasdoorSDK.signin_redirect();
  }, []);

  return null

};

export default Login;