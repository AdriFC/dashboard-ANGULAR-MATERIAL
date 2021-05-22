import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    {usuario: "AdriFC", nombre: 'Adrián', apellidos: 'Fraga Cortés', sexo: 'Masculino'},
    {usuario: "DaniMO", nombre: 'Daniel', apellidos: 'Martiñán Otero', sexo: 'Masculino'},
    {usuario: "AliciaVR", nombre: 'Alicia', apellidos: 'Vazquez Rodriguez', sexo: 'Femenino'},
    {usuario: "MarcoAA", nombre: 'Marco', apellidos: 'Alonso Alonso', sexo: 'Masculino'},
    {usuario: "MaríaBR", nombre: 'María', apellidos: 'Blanco Rodriguez', sexo: 'Femenino'},
    
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellidos', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  resultsLength:any;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
