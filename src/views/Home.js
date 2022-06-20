import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

import { Banner } from "../components/banner";
import { MAPBOX_TOKEN } from "../config";

mapboxgl.accessToken = MAPBOX_TOKEN;

export function DefaultPage({ children }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 1.2,
      center: [0, 45],
      style: "mapbox://styles/hot/cjepk5hhz5o9w2rozqj353ut4",
      interactive: false,
    });
  });

  return (
    <div className=" w-full relative h-screen flex flex-col justify-between">
      <div className="h-1/2 w-full   flex justify-center items-center">
        {children}
      </div>
      <div
        ref={mapContainer}
        data-testid="map-element"
        className="h-1/3 sm:h-1/2 w-full  bottom-0 opacity-70 z-10 "
      />
    </div>
  );
}

export function Home() {
  return (
    <DefaultPage>
      <Banner />
    </DefaultPage>
  );
}
