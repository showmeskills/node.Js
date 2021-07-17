class User{
    firstName:string;
    lastName:string;
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

type UserClass = {
    firstName:string,
    lastName:string;
};

export const printUser=(user:UserClass)=>{
    console.log(`${user.firstName} ${user.lastName}`)
}

export default User;