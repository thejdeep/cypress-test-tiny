export const Username = {
    currentUsername: 'Test',

    get username() {
        return this.currentUsername;
    },

    set username(user) {
        this.currentUsername = user;
    }
};