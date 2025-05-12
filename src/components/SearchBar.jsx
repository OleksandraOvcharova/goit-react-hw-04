import { toast } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value.trim();
    if (search === "") {
      toast.error("Please, enter your search.");
    }
    onSearch(search);
    form.reset();
  };

  return (
    <header className="header">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className="search-input"
        />
        <button className="search-button" type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
