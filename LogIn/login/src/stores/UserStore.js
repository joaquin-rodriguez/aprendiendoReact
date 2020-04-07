import { extendOservable } from 'mbox';

class UserStore {
    constructor() {
        extendOservable(this, {
            leading: true,
            isLoggedIn: false,
            username: ""
        })
    }
}
export default new UserStore();