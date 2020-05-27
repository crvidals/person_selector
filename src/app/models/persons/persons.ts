import { Name, Location, Login, Dob, Registered, Id, Picture } from './persons_data';

export class Persons{
    gender: string;
    email: string;
    phone: string;
    cell: string;
    nat: string;

    name: Name;
    location: Location;
    login: Login;
    dob: Dob;
    registered: Registered;
    id: Id;
    picture: Picture;
    
    constructor(){
        this.gender = this.gender;
        this.phone = this.phone;
        this.cell = this.cell;
        this.email = this.email;
        this.nat = this.nat;

        this.name = new Name();
        this.location = new Location();
        this.login = new Login();
        this.dob = new Dob();
        this.registered = new Registered();
        this.id = new Id();
        this.picture = new Picture();
    }
}