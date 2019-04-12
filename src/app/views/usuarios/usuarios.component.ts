import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'ap-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  elements;
  constructor(private service: ConexionApiService) { }

  ngOnInit() {
    this.service.getUsuarios().subscribe((val) => {
      this.elements = val;
    })
  }

}
