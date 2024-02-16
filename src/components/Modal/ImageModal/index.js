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
            {imageUrl && (
                <img
                    style={{ ...style, cursor: 'pointer', objectFit: 'cover', border: '1px solid #ccc' }}
                    src={imageUrl}
                    alt="Image"
                    onClick={openModal}
                />
            )}

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <img style={{ height: '100%' }} src={imageUrl} alt="" />
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
