import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

interface PixbaySearch {
  id: number;
  webformatURL: string;
}
const App = (): JSX.Element => {
  const [photos, setPhotos] = useState<PixbaySearch[] | null>(null);
  const [keyword, setKeyword] = useState("");
  const [info, setInfo] = useState('Type something and click "Search images"');
  const apiKey = "22072031-b43ed275c2fcd12c6331efa40";
  const url = new URL("https://pixabay.com/api/");
  url.searchParams.append("key", apiKey);
  url.searchParams.append("q", keyword);
  url.searchParams.append("per_page", "10");
  url.searchParams.append("image_type", "photo");

  const getPhotos = async () => {
    const response = await fetch(url.toString());
    const json = await response.json();
    const photos = json.hits;
    setPhotos(photos);
    setInfo("No images found");
  };
  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onFocus={() => setInfo("")}
      />
      <button
        onClick={() => {
          getPhotos();
        }}
      >
        Search Images
      </button>
      <ul>
        {photos === null
          ? info
          : photos.length === 0
          ? info
          : photos.map((photo) => {
              const { id, webformatURL } = photo;
              return (
                <li key={id}>
                  <img src={webformatURL} alt={keyword} />
                </li>
              );
            })}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
