import {useEffect, useRef} from 'react';
import maplibregl from 'maplibre-gl';
import './MapLibreWrapper.css'
import 'maplibre-gl/dist/maplibre-gl.css';

const MapLibreWrapper = () => {
    const mapContainer = useRef(null);

    const aspectRatio = 727 / 1280; // height / width

    // We'll map the image to a simple 2D coordinate space in lon/lat
    // Image corners mapped to a square, preserving aspect ratio
    const bounds: [[number, number], [number, number], [number, number], [number, number]] = [
        [-1, 1],             // top-left
        [1, 1],              // top-right
        [1, 1 - 2 * aspectRatio],    // bottom-right
        [-1, 1 - 2 * aspectRatio]    // bottom-left
    ];


    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current!,
            style: {
                version: 8,
                sources: {
                    overlay: {
                        type: 'image',
                        url: '/sitemap/site-plan.png',
                        coordinates: bounds
                    }
                },
                layers: [
                    {
                        id: 'overlay',
                        source: 'overlay',
                        type: 'raster'
                    }
                ]
            },
            pitch: 25,
            center: [0, (1 - aspectRatio) + 0.4],
            zoom: 7
        });

        return () => map.remove();
    }, []);

    return <div ref={mapContainer} style={
        {
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
        }
    }/>;
};

export default MapLibreWrapper;
