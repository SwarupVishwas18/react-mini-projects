/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect } from "react";

export default function SearchBar({
  search,
  setSearch,
  setMangaData,
}) {
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setMangaData(data.data.slice(0, 9));
        // console.log(mangaData);
      })
      .catch((e) => console.log(e));
  }, [search, setMangaData]);
  function handleClick(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="search-bar">
      <div className="search-text">Search Your Most Favourite Mangas</div>
      <div className="input-cont">
        <input
          type="text"
          value={search}
          onChange={(e) => handleClick(e)}
          placeholder="Enter Search text"
        />
      </div>
    </div>
  );
}
