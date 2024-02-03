import { mdiCamera } from '@mdi/js';
import Icon from '@mdi/react';
import clsx from 'clsx';

import styles from './ImageSearchModal.module.scss';

function ImageSearchModal({ closeModal, setCloseModal }) {
    const handleChooseFile = () => {
        const input = document.getElementById('fileInput');
        const imageContainer = document.getElementById('image_container');
        const file = input.files[0];
        imageContainer.innerHTML = 'Tải hình ảnh để tìm kiếm';
        if (file) {
            imageContainer.innerHTML = '';
            const reader = new FileReader();

            reader.onload = function () {
                const img = document.createElement('img');
                img.width = '250';
                img.src = reader.result;
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        document.getElementById('fileInput').click();
    };

    const handleCloseModal = () => {
        setCloseModal(true);
    };

    return (
        <div onClick={handleCloseModal} className={clsx(styles.modal, { [styles.close]: closeModal })}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal_upload}>
                <div onClick={handleUpload} className={styles.modal_upload_btn}>
                    <input
                        value={null}
                        onChange={handleChooseFile}
                        id="fileInput"
                        style={{ display: 'none' }}
                        type="file"
                    />
                    <Icon path={mdiCamera} size={2}></Icon>
                </div>
                <div id="image_container" className={styles.modal_upload_image}>
                    Tải hình ảnh để tìm kiếm
                </div>
                <button className={styles.modal_search_btn}>Tìm kiếm</button>
            </div>
        </div>
    );
}

export default ImageSearchModal;
