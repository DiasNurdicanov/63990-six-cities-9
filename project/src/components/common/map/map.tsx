import {useRef, useEffect} from 'react';
import {Icon, Marker, PointExpression} from 'leaflet';

import {Hotel} from '../../../types/hotel';
import useMap from '../../../hooks/useMap';
import {City} from '../../../types/hotel';

import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = './img/pin.svg';
const ICON_SIZE: PointExpression = [27, 39];
const ICON_ANCHOR: PointExpression = [14, 39];

type MapProps = {
  hotels: Hotel[];
  city: City;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

function Map(props: MapProps): JSX.Element {
  const {hotels, city} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      hotels.forEach((hotel) => {
        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude,
        });

        marker
          .setIcon(
            defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, hotels]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
