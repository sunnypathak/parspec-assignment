import { useEffect, useState } from "react";

//styles
import "./styles.css";

//components
import { SearchBar } from "./components/SearchBar";
import { SearchList } from "./components/SearchList";

//helpers
import { getUsers } from "./api/axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  return (
    <div className="App">
      <SearchBar
        users={users}
        setSearchResults={setSearchResults}
        setSearchQuery={setSearchQuery}
      />
      <SearchList searchResults={searchResults} searchQuery={searchQuery} />
    </div>
  );
}
