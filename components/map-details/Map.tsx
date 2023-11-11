import * as React from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet';
import dynamic from 'next/dynamic';
import style from '../../app/page.module.css'


function Map() {
    return (
        <MapContainer className={style.map} center={[52.505, -0.09]} zoom={13} scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    );
};
export default Map;