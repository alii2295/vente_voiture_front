import { Annonce } from "./annonce";


export interface User {
    idu:string,
    nom:string,
    prenom:string,
    password:string,
    email:string,
    annonces:Annonce[];

}