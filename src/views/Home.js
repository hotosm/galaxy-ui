import React, { useRef, useEffect } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 import 'mapbox-gl/dist/mapbox-gl.css';

import { Banner } from "../components/banner";
import { MAPBOX_TOKEN } from "../config";

mapboxgl.accessToken = MAPBOX_TOKEN;

export function Home() {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            zoom: 1.20,
            center: [0, 45],
            style: 'mapbox://styles/hot/cjepk5hhz5o9w2rozqj353ut4',
            interactive: false
        });
    })

    return (
        <div className="h-screen w-100">
            <div className="h-full w-full absolute z-10 flex items-center">
                <Banner />
            </div>
            <div ref={mapContainer} data-testid="map-element" className="h-full w-full absolute opacity-70" />
        </div>
    )
};
