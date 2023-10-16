// Interface with similar structure to user and company
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(dataObj: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: dataObj.location.lat,
        lng: dataObj.location.lng,
      },
    });

    marker.addListener('click', function (): void {
      const infoWindow = new google.maps.InfoWindow({
        content: dataObj.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
