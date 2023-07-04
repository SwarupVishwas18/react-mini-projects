/* eslint-disable react/prop-types */
import Card from "./Card";
import { useState } from "react";
export default function SearchResults({
  search,
  mangaData,
  setMangaDetails,
  mangaDetails,
}) {
  const [currentId, setId] = useState();
  const mangaCard = mangaData.map((el) => {
    return (
      <Card
        key={el.mal_id}
        img={el.images.jpg.image_url}
        name={el.titles[0].title}
        rating={el.score}
        status={el.status}
        id={el.mal_id}
        currentId={currentId}
        setId={setId}
        setMangaDetails={setMangaDetails}
        mangaDetails={mangaDetails}
      />
    );
  });
  return (
    <div className="search-results">
      {search == "" ? <h1>Top Mangas</h1> : <h1>Results for {search}</h1>}

      <div className="card-arena">{mangaCard}</div>
    </div>
  );
}
