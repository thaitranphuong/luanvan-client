import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

import Wrapper from '../../../Layout/AdminLayout/Wrapper';
import styles from './Message.module.scss';
import { getToken } from '../../../utils/localstorage';
import { config } from '../../../utils/config';

var stompClient = null;
var connected = false;
var subscribed = false;
function Message() {
    const ref = useRef();
    const [privateChats, setPrivateChats] = useState(new Map());
    let [listAdmins, setListAdmins] = useState([]);
    const [tab, setTab] = useState(1);
    const [userData, setUserData] = useState({
        userId: JSON.parse(localStorage.getItem('user')).id,
        userName: JSON.parse(localStorage.getItem('user')).name,
        receiverId: '',
        connected: false,
        message: '',
        role: JSON.parse(localStorage.getItem('user')).role,
    });

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [privateChats, tab]);

    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
        let Sock = new SockJS(config.baseURL + '/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = async () => {
        if (connected === false) {
            connected = true;
            let url = '';
            userData.role === 'customer'
                ? (url = config.baseURL + '/user/get-all-admin')
                : (url = config.baseURL + '/user/get-all-customer');

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getToken(),
                },
            };
            fetch(url, options)
                .then((res) => res.json())
                .then((res) => {
                    res.forEach((user) => {
                        privateChats.set(user.id, []);
                        setPrivateChats(new Map(privateChats));
                        setListAdmins(res);
                    });
                })
                .then(async () => {
                    [...privateChats.keys()].forEach((receiverId) => {
                        fetch(config.baseURL + `/message/get-all/${userData.userId}/${receiverId}`, options)
                            .then((res) => res.json())
                            .then((res) => {
                                res.forEach((item) => {
                                    var dateObject = new Date(item.createdTime);

                                    var day = dateObject.getDate();
                                    var month = dateObject.getMonth() + 1;
                                    var year = dateObject.getFullYear();

                                    var formattedDate = day + '/' + month + '/' + year;
                                    const chatMessage = {
                                        content: item.content,
                                        isRead: item.isRead,
                                        createdTime: formattedDate,
                                        senderId: item.senderId,
                                        receiverId: item.receiverId,
                                        senderName: item.senderName,
                                    };
                                    privateChats.get(receiverId).push(chatMessage);
                                });
                                setPrivateChats(new Map(privateChats));
                                if (!subscribed) {
                                    stompClient.subscribe(
                                        '/user-chat/' + userData.userId + '/private',
                                        onPrivateMessage,
                                    );
                                    subscribed = true;
                                }
                            });
                    });
                });
        }
    };

    const onError = (err) => {
        console.log(err);
    };

    const onPrivateMessage = (payload) => {
        var payloadData = JSON.parse(payload.body);
        privateChats.get(payloadData.senderId).push(payloadData);
        setPrivateChats(new Map(privateChats));
    };

    const handleMessage = (e) => {
        const { value } = e.target;
        setUserData({ ...userData, message: value });
    };

    const sendPrivateValue = () => {
        if (stompClient) {
            var currentTime = new Date();

            var day = currentTime.getDate();
            var month = currentTime.getMonth() + 1;
            var year = currentTime.getFullYear();
            var formattedDate = day + '/' + month + '/' + year;
            var chatMessage = {
                senderId: userData.userId,
                receiverId: tab,
                content: userData.message,
                isRead: false,
                createdTime: formattedDate,
                senderName: userData.userName,
            };

            if (userData.userId !== tab) {
                privateChats.get(tab).push({ ...chatMessage });
                setPrivateChats(new Map(privateChats));
                delete chatMessage.createdTime;
            }
            stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, message: '' });
        }
    };

    return (
        <div className={styles.wrapper}>
            <Wrapper title="Quản lý tin nhắn" detail="Hỗ trợ khách hàng">
                <div className={styles.inner_wrapper}>
                    <div className={styles.left}>
                        <div className={styles.search_bar}>
                            <input className={styles.search_input} placeholder="Tìm tên khách hàng" />
                        </div>
                        <div className={styles.user_list}>
                            {listAdmins.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setTab(item.id)}
                                    className={clsx(styles.user, { [styles.active]: item.id === tab })}
                                >
                                    <div className={styles.avatar_container}>
                                        <img
                                            className={styles.avatar_image}
                                            src={require('../../../assets/images/avatar.png')}
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.info_top}>
                                            <div className={styles.info_name}>{item.name}</div>
                                            <div className={styles.info_time}>
                                                {privateChats.get(item.id).length > 0 &&
                                                    privateChats.get(item.id)[privateChats.get(item.id).length - 1]
                                                        .createdTime}
                                            </div>
                                        </div>
                                        <div className={styles.info_bottom}>
                                            <div className={styles.last_message}>
                                                {privateChats.get(item.id).length > 0 &&
                                                    privateChats.get(item.id)[privateChats.get(item.id).length - 1]
                                                        .content}
                                            </div>
                                            {/* <div className={styles.unseen_message}>5</div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div ref={ref} className={styles.message_container}>
                            {!!privateChats.get(tab) &&
                                privateChats.get(tab).map((item, index) => (
                                    <div
                                        className={clsx(styles.message_item, {
                                            [styles.message_item_seft]: userData.userId === item.senderId,
                                        })}
                                    >
                                        <img
                                            className={styles.message_avatar}
                                            src={require('../../../assets/images/avatar.png')}
                                            alt=""
                                        />
                                        <div className={styles.message_block}>
                                            <div className={styles.message_name}>{item.senderName}</div>
                                            <div className={styles.message_content}>{item.content}</div>
                                            <div className={styles.message_time}>{item.createdTime}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className={styles.message_bar}>
                            <input
                                onChange={handleMessage}
                                className={styles.message_input}
                                placeholder="Nhập tin nhắn đến khách hàng"
                                value={userData.message}
                            />
                            <button onClick={sendPrivateValue} className={styles.message_send_btn}>
                                <Icon path={mdiSend} size={2.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Message;
