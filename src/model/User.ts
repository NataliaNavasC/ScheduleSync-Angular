
export class User{

    constructor(
       public id:number,
       public username:string,
       public password:string,
       public isActive:boolean,
       public isLoggedIn:boolean
    ){ }

}