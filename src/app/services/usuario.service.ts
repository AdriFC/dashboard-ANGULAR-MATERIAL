import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "AdriFC", nombre: 'Adrián', apellidos: 'Fraga Cortés', sexo: 'Masculino'},
    {usuario: "DaniMO", nombre: 'Daniel', apellidos: 'Martiñán Otero', sexo: 'Masculino'},
    {usuario: "AliciaVR", nombre: 'Alicia', apellidos: 'Vazquez Rodriguez', sexo: 'Femenino'},
    {usuario: "MarcoAA", nombre: 'Marco', apellidos: 'Alonso Alonso', sexo: 'Masculino'},
    {usuario: "MaríaBR", nombre: 'María', apellidos: 'Blanco Rodriguez', sexo: 'Femenino'},
    
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index,1);
  }
}
