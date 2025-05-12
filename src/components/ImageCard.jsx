import "./ImageCard.css";

export default function ImageCard({ description, url }) {
  return (
    <div className="image-div">
      <img className="image" src={url} alt={description} />
    </div>
  );
}
