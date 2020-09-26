import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ShareService } from "../../services/shared-services";

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.scss'],
	providers: [ShareService]
})
export class SideMenuComponent implements OnInit {
	slideOpen: boolean = false;
	places: any;
	lat: any;
	lng: any;
	placeName: any;
	@Output() outputToParent = new EventEmitter<boolean>();
	@Input() configData;
	constructor(public shareService: ShareService) { }



	sliderSlide(slide) {
		this.slideOpen = slide;
	}

	getPlace(e) {
		this.shareService.getPlace(e.target.value).subscribe((response: any) => {
			this.places = response.predictions;
		})
	}

	getLatLong(e) {
		this.shareService.getLatLong(e.option.value).subscribe((response: any) => {
			this.lat = response.results[0].geometry.location.lat;
			this.lng = response.results[0].geometry.location.lng;

			const data: any = {
				lat: this.lat,
				lng: this.lng,
				source: "lat",
				name: e.option.value
			}
			this.outputToParent.emit(data);

		})
	}

	refresh() {
		const data: any = {
			source: "refresh"
		}
		this.outputToParent.emit(data);
	}


	ngOnInit() {
		if (navigator.geolocation) {
			var data: any;
			var thisData = this;
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log(position);
				data = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					source: "currentLocation"
				}
				thisData.outputToParent.emit(data);

			}, function (error) {
				data = {
					lat: 12.9116225,
					lng: 77.6418068,
					source: "currentLocation"
				}


				thisData.outputToParent.emit(data);
			});
		} else {
			// this.locationTrue = false;
		}




	}

}
