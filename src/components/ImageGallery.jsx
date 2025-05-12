import ImageCard from "./ImageCard";
import "./ImageGallery.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className="gallery-list">
      {images.map(({ alt_description, id, urls }) => {
        return (
          <li
            className="gallery-item"
            key={id}
            onClick={() => onClick(urls.regular)}
          >
            <ImageCard description={alt_description} url={urls.small} />
          </li>
        );
      })}
    </ul>
  );
}
