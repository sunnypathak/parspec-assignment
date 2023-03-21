//libs
import React, { useEffect, useRef } from "react";
import { getHighlightedString, getMatchingItems } from "../../../../helper";

//style
import "./styles.css";

const SearchCard = ({
  user,
  searchQuery,
  selected,
  isKeyPressed,
  setIsKeyPressed,
  setCursor,
  index
}) => {
  const cardRef = useRef(null);
  const { id, name, items, address, pincode } = user;

  useEffect(() => {
    focusCard();
  }, [selected]);

  const focusCard = () => {
    if (selected) {
      cardRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const renderItems = () => {
    const { hasMatchingItem, matchingItems } = getMatchingItems(
      items,
      searchQuery
    );
    if (hasMatchingItem) {
      return matchingItems.map((item) => (
        <li>{getHighlightedString(item, searchQuery)} found in items</li>
      ));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`search-card ${selected ? "selected" : ""}`}
      onMouseEnter={() => !isKeyPressed && setCursor(index)}
      onClick={() => setIsKeyPressed(false)}
    >
      <div className="user-id">{getHighlightedString(id, searchQuery)}</div>
      <div className="user-name">{getHighlightedString(name, searchQuery)}</div>
      <ul className="user-items">{renderItems()}</ul>
      <div className="user-address">
        {getHighlightedString(`${address},${pincode}`, searchQuery)}
      </div>
    </div>
  );
};

export default SearchCard;
