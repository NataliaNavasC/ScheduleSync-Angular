import { Session } from "./Session";
import { User } from "./User/User";

export class ScheduledSession{
    
    public id!:number;
    public date!:Date;
    public teacher!:User;
    public session!:Session;

    constructor(id:number, date:Date, teacher:User, session:Session){ 
        this.id = id;
        this.date = date;
        this.teacher = teacher;
        this.session = session;
    }

}