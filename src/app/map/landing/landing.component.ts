import { Component, OnInit } from '@angular/core';
import { MapService } from "../services/map-services"

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	apiLoaded: any;
	map: any = {}
	origin: any = {};
	destination: any = {};

	previous_info_window = null;
	infoWindowOpened = null;
	info: any = {};
	direction: any = false;
	constructor(public mapService: MapService) { }


	getOutputVal(event) {
		switch (event.source) {
			case 'refresh':
				this.direction = false;
				break;
			case 'lat':
				this.map = event;
				this.mapService.getMap(event).subscribe((response: any) => {
					this.apiLoaded = response
				})
				break;
			case 'currentLocation':
				console.log("rec", event)
				this.map = event;
				this.origin = event;
				this.mapService.getMap(event).subscribe((response: any) => {
					this.apiLoaded = response
				})
				break;
			default:
				break;
		}

	}



	select_marker(data, infoWindow) {
		this.info = {};
		this.info = {
			name: data.name,
			address: data.vicinity,
			open: data.opening_hours ? data.opening_hours.open_now : false
		}
		if (this.previous_info_window == null)
			this.previous_info_window = infoWindow;
		else {
			this.infoWindowOpened = infoWindow
			this.previous_info_window.close()
		}
		this.previous_info_window = infoWindow
	}

	gotoAtm(location) {
		this.direction = true;
		this.origin = this.origin;
		this.destination = location;
	}


	ngOnInit() {
	}

}
