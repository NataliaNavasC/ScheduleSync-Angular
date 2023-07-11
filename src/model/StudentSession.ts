import { ScheduledSession } from "./ScheduledSession";
import { User } from "./User/User";

export class StudentSession{

    public id!:number;
    public studentSessionStatus!:string;
    public student!:User;
    public scheduledSession!:ScheduledSession;


    constructor(id:number,studentSessionStatus:string,student:User,scheduledSession:ScheduledSession){
        this.id = id;
        this.studentSessionStatus= studentSessionStatus;
        this.student = student;
        this.scheduledSession = scheduledSession;
    }
}