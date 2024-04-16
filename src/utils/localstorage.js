export const getToken = () => {
    let token = JSON.parse(window.localStorage.getItem('token'));
    if (!!token) return token;
    return false;
};

export const getUser = () => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (!!user) return user;
    return false;
};

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
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
