import { Street, Coordinates, Timezone } from './location_data';

export class Name{
    title: string;
    first: string;
    last: string;
}

export class Location{
    city: string;
    state: string;
    country: string;
    postcode: number;
    street: Street;
    coordinates: Coordinates;
    timezone:Timezone;

    constructor(){
        this.street = new Street();
        this.coordinates = new Coordinates();
        this.timezone = new Timezone();
    }
}

export class Login{
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export class Dob {
    date: string;
    age: number;
}

export class Registered{
    date: string;
    age: number;
}

export class Id{
    name: string;
    value: string;
}

export class Picture{
    large: string;
    medium: string;
    thumbnail: string;
}