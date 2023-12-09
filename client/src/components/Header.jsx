"use client";
import React from "react";
import Link from "next/link";
import '../app/wallet';


// Import the Head component from next/head
import Head from 'next/head';

const Header = () => {
  async function requestAccount(){
    console.log("requesting")
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // setWalletAddress(accounts[0]);
        console.log(accounts[0])
      } catch (error) {
        console.log(String(error));
      }

    } else {
      alert('Meta Mask not detected');
    }
  }
  return (
    <div>
      {/* Use the Head component to define the custom header */}
      <Head>
        {/* Set the title of the page */}
        <title>Prime</title>

        {/* Add meta tags for description, keywords, etc. */}
        <meta name="description" content="This is my page description" />
        <meta name="keywords" content="next.js, react, web development" />

        {/* Include external stylesheets or scripts */}
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      {/* The rest of your page content goes here */}
      <div>
        <h3>Prime</h3>
        <p>Protocol</p>
      </div>
      <div>
        <button className="btn btn-primary" id = "btn-wallet" onClick={requestAccount}>Wallet</button>
      </div>
    </div>

  );
};

export default Header;
