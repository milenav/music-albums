export function notAuthGuard(to, from, next) {
    if (localStorage.getItem('token') !== null) {
        next();
    } else {
        next('/');
    }
}

export function authGuard(to, from, next) {
    if (localStorage.getItem('token') !== null) {
        next('/');
    } else {
        next();
    }
}