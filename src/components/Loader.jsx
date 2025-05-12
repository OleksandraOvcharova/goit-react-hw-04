import { ClipLoader } from "react-spinners";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <ClipLoader color={"rgba(255, 255, 255, 0.87)"} />
    </div>
  );
}
