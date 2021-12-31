import React from "react";
import insta from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import more from "../assets/owner/more.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="highlight">
          <div className="container">
            <img
              className="selectedNft"
              src="https://ipfs.thirdweb.com/ipfs/bafkreicdldqdazb7jzrz5yhwc7j3alkhyycy6x3mcec4opvxxegnr2qvtu"
            />
          </div>
        </div>
        <div className="details" style={{ color: "white" }}>
          <div className="title">
            name
            <span className="itemNumber">#7</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                className="image"
                src="https://ipfs.thirdweb.com/ipfs/bafkreicdldqdazb7jzrz5yhwc7j3alkhyycy6x3mcec4opvxxegnr2qvtu"
              />
              <div className="ownerDetails">
                <div className="nameHandle">
                  <div className="address">
                    0xC15461E2Bfc38F59963f0A10C6e9343b1fDcFd46
                  </div>
                  <div className="handle">Abuzar Hassan</div>
                </div>
                <div className="link">
                  <img src={insta} />
                </div>
                <div className="link">
                  <img src={twitter} />
                </div>
                <div className="link">
                  <img src={more} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
