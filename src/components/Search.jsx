import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../App';

function Search() {
  const searchInput = useRef();
  const { setSearchTerm } = useContext(GlobalContext);

  useEffect(() => {
    searchInput.current.focus();
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <h3 className="search-title">Search your favorite cocktail</h3>
      <input
        type="text"
        ref={searchInput}
        className="search-input"
        onChange={handleChange}
      />
    </div>
  );
}
export default Search;
