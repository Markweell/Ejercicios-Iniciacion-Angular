import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/services/conexion-api.service';

@Component({
  selector: 'ap-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  nombre = 'Marcos';
  nombreCompleto = 'maRCos gallaRdo pérez';
  array = ['Marcos', 'Pedro', 'JoseAntonio', 'Periquillo', 'Mariantoñeta'];
  number = Math.PI;
  percentNumber = 0.564;
  usuario = {};
  video = "KvwZUQ3eB4k";
  contrasenia = "123456789";
  visible = true;
  promise = new Promise((resolve, rejec) => {
    setTimeout(() => resolve('Datos obtenidos'), 3500);
  });
  date = new Date();
  constructor(private service: ConexionApiService) { }

  ngOnInit() {
    this.service.getUsuarios().subscribe((val) => {
      this.usuario = val[0];
    });
  }
  cambio(){
    this.visible = this.visible ? false : true;
  }

}
