//@ts-ignore
"use client";
import React, { useState, useEffect } from "react";
import lighthouse from "@lighthouse-web3/sdk";

import { ethers } from "ethers";

import DataPool from "../../contracts/DataPool.json";
import { useRouter } from "next/navigation";

export default function Test() {
  const [myImages, setMyImages] = useState([]);

  const router = useRouter();

  async function trainModel() {
    console.log(ethers);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (provider) {
      const user = provider.getSigner();

      const dataLayer = new ethers.Contract(
        DataPool.address,
        DataPool.abi,
        user
      );

      const tx = await dataLayer.trainModel();

      console.log(tx);
      setMyImages(tx);
    }
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <button
        onClick={() => {
          router.push("/dashboard/user");
        }}
      >
        Go Back
      </button>

      <button onClick={trainModel}>Train</button>
    </div>
  );
}
