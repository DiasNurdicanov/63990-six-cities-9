import {useRef, useEffect, useState} from 'react';
import {Icon, Marker, PointExpression, LatLng} from 'leaflet';

import {Hotel} from '../../../types/hotel';
import {City} from '../../../types/hotel';
import useMap from '../../../hooks/use-map';

import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = './img/pin.svg';
const URL_MARKER_CURRENT = './img/pin-active.svg';
const ICON_SIZE: PointExpression = [27, 39];
const ICON_ANCHOR: PointExpression = [14, 39];

type MapProps = {
  hotels: Hotel[];
  city: City;
  activeMarkerIndex?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iiconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

function Map(props: MapProps): JSX.Element {
  const {hotels, city, activeMarkerIndex} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const [markers] = useState<Marker[]>([]);

  useEffect(() => {
    if (map) {
      map.panTo(new LatLng(city.location.latitude, city.location.longitude));
      markers.forEach((marker) => map.removeLayer(marker));

      hotels.forEach((hotel) => {
        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude,
        });

        marker
          .setIcon(
            activeMarkerIndex !== undefined && activeMarkerIndex === hotel.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);

        markers.push(marker);
      });
    }
  }, [map, hotels, markers, activeMarkerIndex, city]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
