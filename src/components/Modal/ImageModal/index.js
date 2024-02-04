import { useState } from 'react';
import Modal from 'react-modal';

const ImageModal = ({ imageUrl }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <img src={imageUrl} alt="Image" onClick={openModal} />

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                <img src={imageUrl} alt="Image" />
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default ImageModal;
