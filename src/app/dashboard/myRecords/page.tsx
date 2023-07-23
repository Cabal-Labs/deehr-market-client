//@ts-ignore
"use client";
import React, { useState, useEffect } from "react";
import lighthouse from "@lighthouse-web3/sdk";

import { ethers } from "ethers";

import DataPool from "../../../contracts/DataPool.json";
import { useRouter } from "next/navigation";

export default function Test() {
  const [myImages, setMyImages] = useState([]);

  const router = useRouter();

  async function getData() {
    console.log(ethers);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (provider) {
      const user = provider.getSigner();

      const dataLayer = new ethers.Contract(
        DataPool.address,
        DataPool.abi,
        user
      );

      const tx = await dataLayer.getData(
        "0xB496D0EcBD6695A9B6635A0CDF84080858ADAcBD"
      );

      console.log(tx);
      setMyImages(tx);
    }
  }

  useEffect(() => {
    getData();
  }, []);
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

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {myImages.map((item: any, i) => (
          <img
            key={i}
            src={item.clear_text_data}
            style={{ width: "200px", height: "200px" }}
          />
        ))}
      </div>
    </div>
  );
}
