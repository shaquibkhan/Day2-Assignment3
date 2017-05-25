
class signIn{

	username: string ;
	constructor(user:string){
		this.username=user;
	}
	get(user){
		if (this.username=='shaquib') {
			console.log(`The username ${this.username} is valid username`);
		}
		else{
			console.log(`The username ${this.username} is invalid username`);
		}
	}
	set(user){
		this.username=user;
	}
	 
}
	var info = new signIn('khan');
	