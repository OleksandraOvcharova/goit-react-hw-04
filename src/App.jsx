import { useEffect, useState } from "react";
import { fetchImagesWithFilters } from "./api/images";

import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import LoadMoreButton from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setPage(1);
    setImages([]);
    setTotalPages(1);
  }, [search]);

  useEffect(() => {
    async function fetchImages() {
      try {
        if (search === "") {
          return;
        }

        setError(false);
        setLoading(true);
        const { total_pages, results } = await fetchImagesWithFilters(
          search,
          page
        );
        if (page > 1) {
          setImages((prevImages) => [...prevImages, ...results]);
        } else {
          setImages(results);
        }
        setTotalPages(total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [search, page]);

  const handleClick = () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageClick = (url) => {
    setImageUrl(url);
    openModal();
  };

  return (
    <>
      <Toaster />
      <SearchBar onSearch={setSearch} />
      <div className="container">
        {error && <ErrorMessage />}
        <ImageGallery images={images} onClick={handleImageClick} />
        {loading && <Loader />}
        {page < totalPages && !loading && (
          <LoadMoreButton handleClick={handleClick} />
        )}
      </div>
      <ImageModal
        imagaUrl={imageUrl}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
