import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import { useEffect, useRef } from 'react';

import styles from './Message.module.scss';
import Footer from '../../../Layout/DefaultLayout/Footer';

function Message() {
    const ref = useRef();

    useEffect(() => {
        //if (tab) {
        ref.current.scrollTop = ref.current.scrollHeight;
        //}
    }); //[privateChats, tab]);
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.search_bar}>
                        <input className={styles.search_input} placeholder="Tìm tên admin" />
                    </div>
                    <div className={styles.user_list}>
                        <div className={clsx(styles.user, { [styles.active]: false })}>
                            <div className={styles.avatar_container}>
                                <img
                                    className={styles.avatar_image}
                                    src={require('../../../assets/images/avatar.png')}
                                    alt="Avatar"
                                />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.info_top}>
                                    <div className={styles.info_name}>Admin 1</div>
                                    <div className={styles.info_time}>17 GIỜ TRƯỚC</div>
                                </div>
                                <div className={styles.info_bottom}>
                                    <div className={styles.last_message}>hello</div>
                                    <div className={styles.unseen_message}>5</div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.user, { [styles.active]: true })}>
                            <div className={styles.avatar_container}>
                                <img
                                    className={styles.avatar_image}
                                    src={require('../../../assets/images/avatar.png')}
                                    alt="Avatar"
                                />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.info_top}>
                                    <div className={styles.info_name}>Admin 1</div>
                                    <div className={styles.info_time}>17 GIỜ TRƯỚC</div>
                                </div>
                                <div className={styles.info_bottom}>
                                    <div className={styles.last_message}>hello</div>
                                    <div className={styles.unseen_message}>5</div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.user, { [styles.active]: false })}>
                            <div className={styles.avatar_container}>
                                <img
                                    className={styles.avatar_image}
                                    src={require('../../../assets/images/avatar.png')}
                                    alt="Avatar"
                                />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.info_top}>
                                    <div className={styles.info_name}>Admin 1</div>
                                    <div className={styles.info_time}>17 GIỜ TRƯỚC</div>
                                </div>
                                <div className={styles.info_bottom}>
                                    <div className={styles.last_message}>hello</div>
                                    <div className={styles.unseen_message}>5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div ref={ref} className={styles.message_container}>
                        <div className={clsx(styles.message_item, { [styles.message_item_seft]: false })}>
                            <img
                                className={styles.message_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                            <div className={styles.message_block}>
                                <div className={styles.message_name}>Admin 1</div>
                                <div className={styles.message_content}>
                                    asdasdasdasdasdasda sdasdasdasdasdsad asdasdasdasdasdasd asasdasda asdasdsadasd
                                </div>
                                <div className={styles.message_time}>17 GIỜ TRƯỚC</div>
                            </div>
                        </div>

                        <div className={clsx(styles.message_item, { [styles.message_item_seft]: true })}>
                            <div className={styles.message_block}>
                                <div className={styles.message_name}>Admin 1</div>
                                <div className={styles.message_content}>
                                    asdasdasdasdasdasda sdasdasdasdasdsad asdasdasdasdasdasd asasdasda asdasdsadasd
                                </div>
                                <div className={styles.message_time}>17 GIỜ TRƯỚC</div>
                            </div>

                            <img
                                className={styles.message_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                        </div>

                        <div className={clsx(styles.message_item, { [styles.message_item_seft]: false })}>
                            <img
                                className={styles.message_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                            <div className={styles.message_block}>
                                <div className={styles.message_name}>Admin 1</div>
                                <div className={styles.message_content}>
                                    asdasdasdasdasdasda sdasdasdasdasdsad asdasdasdasdasdasd asasdasda asdasdsadasd
                                </div>
                                <div className={styles.message_time}>17 GIỜ TRƯỚC</div>
                            </div>
                        </div>

                        <div className={clsx(styles.message_item, { [styles.message_item_seft]: true })}>
                            <div className={styles.message_block}>
                                <div className={styles.message_name}>Admin 1</div>
                                <div className={styles.message_content}>
                                    asdasdasdasdasdasda sdasdasdasdasdsad asdasdasdasdasdasd asasdasda asdasdsadasd
                                </div>
                                <div className={styles.message_time}>17 GIỜ TRƯỚC</div>
                            </div>

                            <img
                                className={styles.message_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                        </div>

                        <div className={clsx(styles.message_item, { [styles.message_item_seft]: true })}>
                            <div className={styles.message_block}>
                                <div className={styles.message_name}>Admin 1</div>
                                <div className={styles.message_content}>
                                    asdasdasdasdasdasda sdasdasdasdasdsad asdasdasdasdasdasd asasdasda asdasdsadasd
                                </div>
                                <div className={styles.message_time}>17 GIỜ TRƯỚC</div>
                            </div>

                            <img
                                className={styles.message_avatar}
                                src={require('../../../assets/images/avatar.png')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.message_bar}>
                        <input className={styles.message_input} placeholder="Nhập tin nhắn đến admin" />
                        <button className={styles.message_send_btn}>
                            <Icon path={mdiSend} size={2.5} />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Message;
