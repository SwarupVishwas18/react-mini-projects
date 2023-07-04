import Navbar from "./comp/Navbar";
import "./App.css";
import SearchBar from "./comp/SearchBar";
import SearchResults from "./comp/SearchResults";
import Footer from "./comp/Footer";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [mangaData, setMangaData] = useState([]);
  const [mangaDetails, setMangaDetails] = useState({});
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/manga/13")
      .then((res) => res.json())
      .then((data) => setMangaDetails(data))
      .catch((e) => console.log(e));
  }, []);
  // console.log(mangaDetails);
  return (
    <div>
      <div className="header">
        <Navbar />
        <SearchBar
          search={search}
          setSearch={setSearch}
          setMangaData={setMangaData}
        />
      </div>
      <SearchResults
        search={search}
        mangaData={mangaData}
        setMangaDetails={setMangaDetails}
        mangaDetails={mangaDetails}
      />
      <Footer />
    </div>
  );
}

export default App;
