import { Domicilio } from "./domicilio";

export class Usuario {

    public id: number;
    public nombre: string;
    public apellido: string;
    public email: string;
    public password: string;
    public documento: string;
    public fecha: Date;
    public foto: any;
    public domicilioID: number;
    public domicilio: Domicilio = new Domicilio();
    public perfilID: number;
    public perfil: string;
}
