import { useState } from 'react';
import Modal from 'react-modal';

const ImageModal = ({ imageUrl, style }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <img style={style} src={imageUrl} alt="Image" onClick={openModal} />

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                <div style={{ textAlign: 'center' }}>
                    <img src={imageUrl} alt="Image" />
                    <button
                        style={{
                            backgroundColor: 'red',
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                            border: 'none',
                            fontSize: '2rem',
                            color: '#fff',
                        }}
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ImageModal;
