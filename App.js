import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiamVyZW1kc2duIiwiYSI6ImNrNDNhMmJyZjAyeTUzbG82dXl2enVxeDUifQ.v5ohmRBCluzuMNsWZq056A',
);

const urls = [
  {
    id: 1,
    url:
      'https://france-geojson.gregoiredavid.fr/repo/regions/centre-val-de-loire/region-centre-val-de-loire.geojson',
  },
  {
    id: 2,
    url:
      'https://france-geojson.gregoiredavid.fr/repo/regions/ile-de-france/region-ile-de-france.geojson',
  },
  {
    id: 3,
    url:
      'https://france-geojson.gregoiredavid.fr/repo/regions/normandie/region-normandie.geojson',
  },
];

export default () => {
  const [activeUrl, setActiveUrl] = useState(urls[0].url);

  const handlePress = index => {
    setActiveUrl(urls.find(u => u.id === index).url);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => handlePress(1)}
        style={{position: 'absolute', bottom: 80, left: 20, zIndex: 100}}>
        <Text>ShapeSource 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress(2)}
        style={{position: 'absolute', bottom: 100, left: 20, zIndex: 100}}>
        <Text>ShapeSource 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress(3)}
        style={{position: 'absolute', bottom: 120, left: 20, zIndex: 100}}>
        <Text>ShapeSource 3</Text>
      </TouchableOpacity>

      <MapboxGL.MapView style={{flex: 1}}>
        <MapboxGL.Camera
          zoomLevel={4}
          centerCoordinate={[2.237837, 48.890717]}
        />

        {/* If you remove key={activeUrl} it won't work anymore */}
        <MapboxGL.ShapeSource id="shape" key={activeUrl} url={activeUrl}>
          <MapboxGL.FillLayer
            id="fill"
            type="fill"
            style={{fillColor: '#191a1a', fillOpacity: 0.4}}
          />
        </MapboxGL.ShapeSource>
      </MapboxGL.MapView>
    </>
  );
};
