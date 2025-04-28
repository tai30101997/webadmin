"use client";
import { useRouter } from "next/navigation";
import { useCookies } from 'next-client-cookies';
import React, { useState } from "react";
import "../global.css";
export default function Page() {
  const [code, setCode] = useState('');
  const [secret, setSecret] = useState('');
  const router = useRouter();
  const Cookies = useCookies();
  const user = Cookies.get("adminUser");
  const userJson = user ? JSON.parse(user.toString()) : {};
  const handleLogout = () => {
    Cookies.remove("adminUser");
    router.push("/");
  };

  const callAddUser = async () => {
    const res = await fetch('http://localhost:8080/api/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
  }
  const mfaInit = async () => {
    const res = await fetch('http://localhost:8080/api/setup/initial', {})
  };

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };
  const handleChangeSecret = (e: any) => {
    setSecret(e.target.value);
  };
  const handleVerifyCode = async (e: any) => {
    console.log(code, "code")
    e.preventDefault();
    const res = await fetch('http://localhost:8080/api/setup/verify', {
      method: 'POST',
      body: JSON.stringify({ code: code, secret: secret }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

  }
  return (
    <>
      <h1>Hello {userJson.name}!</h1>
      <hr />
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>Username</td>
              <td>{userJson.preferred_username}</td>
            </tr>
            <tr>
              <td>Display Name</td>
              <td>{userJson.name}</td>
            </tr>
            <tr>
              <td>User ID</td>
              <td>{userJson.sub}</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>
                <img src={userJson.picture}></img>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={handleLogout}>Logout</button>
        <br></br>
        <button onClick={callAddUser}>call ad user </button>
        <br></br>
        <button onClick={mfaInit}>MFA INIT</button>
        <br></br>
        <form onSubmit={handleVerifyCode}>
          <input
            type="text"
            id="code"
            name="code"
            style={{ border: '1px solid black' }}
            value={code}
            onChange={handleChange}
          />

          <label htmlFor="code" >
            Code:
          </label>
          <input
            type="text"
            id="secret"
            name="secret"
            style={{ border: '1px solid black' }}
            value={secret}
            onChange={handleChangeSecret}
          />

          <label htmlFor="secret" >
            Secret:
          </label>
          <button type="submit"  >
            verify
          </button>
        </form>

      </div>
    </>
  );
}
