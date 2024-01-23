import clsx from 'clsx';
import { useState, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Paginate.module.scss';

function Paginate() {
    const [page, setPage] = useState(5);
    const [totalPage, setTotalPage] = useState(10);
    const listPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [search, setSearch] = useState('');

    const render = () => {};

    const handleChangePage = (pageValue) => {
        if (pageValue >= 1 && pageValue <= totalPage) {
            render(pageValue, search);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.pagination}>
                <div className={styles.pageList}>
                    {totalPage > 0 && (
                        <button
                            onClick={(e) => handleChangePage(e.target.value)}
                            className={clsx(styles.pageItem, { [styles.disabled]: page === 1 })}
                            value={page - 1}
                        >
                            Previous
                        </button>
                    )}
                    {page > 3 && <span className={styles.three_dot}>...</span>}
                    {listPage.map((item) => {
                        if (item <= page + 2 && item >= page - 2) {
                            return (
                                <button
                                    onClick={(e) => handleChangePage(e.target.value)}
                                    key={item}
                                    className={clsx(styles.pageItem, { [styles.active]: page === item })}
                                    value={item}
                                >
                                    {item}
                                </button>
                            );
                        }
                    })}
                    {page < totalPage - 2 && <span className={styles.three_dot}>...</span>}
                    {totalPage > 0 && (
                        <button
                            onClick={(e) => handleChangePage(e.target.value)}
                            className={clsx(styles.pageItem, { [styles.disabled]: page === totalPage })}
                            value={page + 1}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Paginate;
