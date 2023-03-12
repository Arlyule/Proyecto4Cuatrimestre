import { Component } from '@angular/core';
import { MapService } from '../../Service/map.service';
import { PlacesService } from '../../Service/places.service';

@Component({
  selector: 'app-btn-mylocation',
  templateUrl: './btn-mylocation.component.html',
  styleUrls: ['./btn-mylocation.component.css']
})
export class BtnMylocationComponent {

  constructor(private PlacesService:PlacesService,private mapService:MapService) { }

  goToMyLocation(){

    if(!this.PlacesService.isUserLocationReady) throw Error('No hay ubicación de usuario');
    if(!this.mapService.isMapReady) throw Error('No hay mapa disponible');

    this.mapService.flyTo(this.PlacesService.useLocation! );
    
  }
}
