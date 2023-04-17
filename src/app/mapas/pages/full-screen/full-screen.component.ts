import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa{
      height: 100%;
      width: 100%;
    }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.98156696995413, -12.146622424562254],
      zoom: 18
    });
  }

}
