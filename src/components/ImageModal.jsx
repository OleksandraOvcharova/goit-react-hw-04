import Modal from "react-modal";
import "./ImageModal.css";

Modal.setAppElement("#root");

export default function ImageModal({ imagaUrl, modalIsOpen, closeModal }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      position: "static",
      background: "transparent",
      border: "none",
      padding: 0,
      inset: "unset",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img className="modal-img" src={imagaUrl}></img>
    </Modal>
  );
}
