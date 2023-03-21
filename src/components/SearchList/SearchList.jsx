//libs
import React, { useEffect, useState } from "react";

//hook
import useKeyPress from "../../hook/useKeyPress";

//component
import SearchCard from "./component/SearchCard/SearchCard";

//style
import "./styles.css";

const SearchList = ({ searchResults, searchQuery }) => {
  const [cursor, setCursor] = useState(0);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");

  useEffect(() => {
    if (
      searchResults.length &&
      downPress &&
      cursor < searchResults.length - 1
    ) {
      setCursor(cursor + 1);
      setIsKeyPressed(true);
    }
  }, [downPress]);

  useEffect(() => {
    if (searchResults.length && upPress && cursor > 0) {
      setCursor(cursor - 1);
      setIsKeyPressed(true);
    }
  }, [upPress]);

  const renderSearchList = () => {
    return searchResults.map((user, index) => (
      <SearchCard
        user={user}
        searchQuery={searchQuery}
        selected={cursor === index}
        index={index}
        setCursor={setCursor}
        isKeyPressed={isKeyPressed}
        setIsKeyPressed={setIsKeyPressed}
      />
    ));
  };

  return (
    searchQuery.length > 0 &&
    (searchResults.length > 0 ? (
      <div className="search-list">{renderSearchList()}</div>
    ) : (
      <div className="empty-card">No Users Found</div>
    ))
  );
};

export default SearchList;
