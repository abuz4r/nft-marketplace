import React, { useEffect, useState } from "react";
import insta from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import more from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedNft, listData }) => {
  const [activeNft, setActiveNft] = useState(listData[0])

  useEffect(() => {
    setActiveNft(listData[selectedNft])

  }, [listData, selectedNft])
  return (
    <div className="main">
      <div className="mainContent">
        <div className="highlight">
          <div className="container">
            <img
              className="selectedNft"
              src={activeNft.image_original_url}
            />
          </div>
        </div>
        <div className="details" style={{ color: "white" }}>
          <div className="titleMain">

            {activeNft.name}<span className="itemNumber"> #{activeNft.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                className="image"
                src={activeNft.owner.profile_img_url}
              />
              <div className="ownerDetails">
                <div className="nameHandle">
                  <div className="address">
                    {activeNft.owner.address}
                  </div>
                  <div className="handle">@abuz4r</div>
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
