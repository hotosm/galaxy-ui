import React, { useRef, useEffect } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { Banner } from "../components/banner";

mapboxgl.accessToken = 'pk.eyJ1IjoiaG90IiwiYSI6ImNrMnVscm00YTE3anMzZW1uaGF0bHRrbjIifQ.QcgWgp8-5BljWasaCuATnw';

export function Home() {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            zoom: 0.9,
            center: [0, 0],
            style: 'mapbox://styles/hot/cjepk5hhz5o9w2rozqj353ut4',
            interactive: false
        });
    })

    return (
        <div className="h-screen w-100">
            <div className="h-3/5 w-full mt-44 absolute z-5">
                <Banner />
            </div>
            <div ref={mapContainer} className="h-full w-full" />
        </div>
    )
};
