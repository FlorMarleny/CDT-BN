import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Sechura = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: -5.556363940116908,
    lng: -80.82329696016133,
  }; // Coordenadas de ubicación del mapa (latitud, longitud)

  return (
    <LoadScript googleMapsApiKey="AIzaSyA4h6npHMFXMNQHPFn-IdzF9w-MhTRUVWQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Sechura;