import { Course } from "../Course";

export class User{
    
    public id!:number;
    public username!:string;
    public active!:boolean;
    public role!:string;
    public course!:Course;

    constructor(id:number,username:string,active:boolean,role:string,course:Course){
        this.id = id;
        this.username = username;
        this.active = active;
        this.role = role;
        this.course = course;
    }

}