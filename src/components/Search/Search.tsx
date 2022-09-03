import React from "react";
import styles from "./search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

type SearchProps = {
  searchValue: string | number;
  setSearchValue: any;
};
const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <SearchIcon />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="поиск пицц..."
      />
      {searchValue && <CloseIcon onClick={() => setSearchValue("")} />}
    </div>
  );
};

export default Search;
