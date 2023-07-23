//@ts-ignore
"use client";
import React, { useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";

import { ethers } from "ethers";

import DataPool from "../../contracts/DataPool.json";

export default function Test() {
  const [url, setUrl] = useState();
  const [hasCancer, setHasCancer] = useState(true);

  async function save_to_contract() {
    console.log(ethers);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (provider) {
      const user = provider.getSigner();

      const dataLayer = new ethers.Contract(
        DataPool.address,
        DataPool.abi,
        user
      );

      const tx = dataLayer.addData(url, url, hasCancer);

      console.log(tx);
    }
  }

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async (file) => {
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    const output = await lighthouse.upload(
      file,
      "27a3f333.4bcd0e387e0c4bdbad99c430b778a880",
      progressCallback
    );
    console.log("File Status:", output);

    let _url = "https://gateway.lighthouse.storage/ipfs/" + output.data.Hash;

    setUrl(_url);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        flexDirection: "column",
      }}
    >
      <input onChange={(e) => uploadFile(e.target.files)} type="file" />
      <img src={url} style={{ width: "200px", height: "200px" }} />

      <button onClick={save_to_contract}>Upload</button>
    </div>
  );
}
