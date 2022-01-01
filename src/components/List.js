import React from "react";
import CollectionCard from "./CollectionCard";
import "./List.css";

const List = ({ listData, setSelectedNft }) => {
  return (
    <div className="list">
      {listData.map((nft) => (
        <div onClick={() => setSelectedNft(nft.token_id)}>
          <CollectionCard
            key={nft.token_id}
            id={nft.token_id}
            name={nft.name}
            traits={nft.traits}
            image={nft.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
