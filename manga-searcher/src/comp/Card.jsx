/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import star from "../assets/star.png";

export default function Card({
  img,
  name,
  rating,
  status,
  id,
  currentId,
  setId,
  setMangaDetails,
  mangaDetails,
}) {
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga/${id}`)
      .then((re) => re.json())
      .then((data) => {
        setMangaDetails(data);
      });
  }, [currentId]);

  return (
    <div
      className="card"
      onClick={() => {
        setId(id);
        console.log(currentId);
        console.log(mangaDetails);
      }}
    >
      <div className="img">
        <img src={img} width="200px" alt="" />
      </div>
      <div className="upper">
        <h2>{name}</h2>
        <div className="other">
          <div className="rating">
            <div className="rating-img">
              <img width={15} src={star} alt="rating" />
            </div>
            <div className="rating">{rating}</div>
          </div>
          <div className="status">{status}</div>
        </div>
      </div>
    </div>
  );
}
