import React from "react";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <>
      <div>
        <img src="..\logo\Logo.png" alt="404" className="about-logo" />
        <div className="content">
          <p>
            <h2>
              Memextream is a meme machine built Memelovers for Memelovers.
            </h2>
            <br />
          </p>
          <p>
            <h2>Contribute to our mission with your skills:</h2>
            <a href="https://github.com/shubhamcodez/OPMeme">
              <h3 className="a-link">Github</h3>
            </a>
            <a href="https://www.paypal.com/paypalme/SSingh33?locale.x=en_GB">
              <h3 className="a-link">Donate</h3>
            </a>
          </p>

          <h2>Features of Memextream 1. 0. 0</h2>
          <ul>
            <li>Upload Memes by entering URL</li>
            <li>GET method to display all memes on endpoint /memes/</li>
            <li>GET method to display a single meme on endpoint /memes/id</li>
            <li>Edit a meme using Patch Method on endpoint /memes/id</li>
          </ul>

          <h2>Proposed features of Memextream 2. 0. 0</h2>
          <ul>
            <li>React.js Frontend</li>
            <li>Edit button to edit a meme using patch request</li>
            <li>Like button to display count of likes per meme</li>
            <li>Sort by popularity (past 24 hours) feature</li>
            <li>Adding Crypto-Currency to the platform</li>
            <li>Monetization</li>
          </ul>
        </div>
      </div>
    </>
  );
}
