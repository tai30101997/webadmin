
"use client";
import { useCasdoor } from "@webadmin/casdoor";
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { sdkConfig } from "../conf";
export default function AuthCallback() {
  const Cookies = useCookies();
  const router = useRouter();

  useEffect(() => {
    const CasdoorSDK = useCasdoor(sdkConfig);
    CasdoorSDK.exchangeForAccessToken()
      .then((res: any) => {
        if (res && res.access_token) {
          console.log("accessToken", res.access_token)
          return CasdoorSDK.getUserInfo(res.access_token);
        } else {
          throw new Error(res.error_description);
        }
      })
      .then((res) => {
        const casdoorUserInfo = res;
        Cookies.set("adminUser", JSON.stringify(casdoorUserInfo));
        router.push("/profile");
      })
      .catch((error) => {
        console.error("Failed to get access_token:", error);
        router.push("/");
      });

  }, []);

  return <div>signing...</div>;
};

