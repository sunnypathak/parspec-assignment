//lib
import React from "react";

//constants
import { SEARCH_BAR_PLACEHOLDER } from "../../constants/index";

//helper
import { getFilteredUsers } from "../../helper";

//style
import "./styles.css";

const SearchBar = ({ users, setSearchResults, setSearchQuery }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();

    if (!query) setSearchResults(null);

    setSearchQuery(query);
    const result = getFilteredUsers(users, query);
    setSearchResults(result);
  };

  return (
    <input
      className="search-input"
      type="text"
      onChange={handleInputChange}
      placeholder={SEARCH_BAR_PLACEHOLDER}
    />
  );
};

export default SearchBar;
