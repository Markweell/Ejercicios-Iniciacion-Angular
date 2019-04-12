import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from './services/conexion-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Array = Array;
  title = 'aplicacionPeliculas';
  element;
  constructor(private service: ConexionApiService, private route: ActivatedRoute){

  }
  ngOnInit(): void {

    if(this.route.snapshot.params.id)
    {
      this.service.getUsuario(this.route.snapshot.params.id).subscribe((val) => {
        this.element = val;
        console.log(val)
      });
    }else{
      this.service.getUsuarios().subscribe((val) => {
        this.element = val;
      });
    }
  }

}
