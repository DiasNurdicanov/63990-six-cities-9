import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';

import {Hotel} from '../../../types/hotel';
import useMap from '../../../hooks/useMap';

import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = './img/pin.svg';

type MapProps = {
  hotels: Hotel[]
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map(props: MapProps): JSX.Element {
  const {hotels} = props;

  const city = hotels[0].city.location;
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
