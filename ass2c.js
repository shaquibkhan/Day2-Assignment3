var signIn = (function () {
    function signIn(user) {
        this.username = user;
    }
    signIn.prototype.get = function (user) {
        if (this.username == 'shaquib') {
            console.log("The username " + this.username + " is valid username");
        }
        else {
            console.log("The username " + this.username + " is invalid username");
        }
    };
    signIn.prototype.set = function (user) {
        this.username = user;
    };
    return signIn;
}());
var info = new signIn('khan');
info.get("");
