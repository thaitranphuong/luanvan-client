export const getToken = () => {
    let token = JSON.parse(window.localStorage.getItem('token'));
    if (!!token) return token;
    return false;
};

export const isLogin = () => {
    if (!!getToken()) {
        return true;
    }
    return false;
};

export const logout = () => {
    window.localStorage.clear();
    window.location.pathname = '/login';
};
