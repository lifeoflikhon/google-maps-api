interface Mappable {
  location: {
    lat: number;
    long: number;
  }
}

export class CustomMap {
  private readonly googleMap: google.maps.Map;
  constructor(id: string) {
    this.googleMap = new google.maps.Map<Element>(document.getElementById(id), {
      zoom: 1,
      center: {lat: 0, lng: 0 }
    });
  }

  addMarker(mappable: Mappable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long
      }
    });
  }
}
