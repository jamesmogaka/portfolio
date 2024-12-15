import React from 'react';
import { MapPin } from 'react-feather';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

interface MapProps {
    isDarkTheme: boolean;
}

const Map: React.FC<MapProps> = ({ isDarkTheme }) => (
    <div className="w-full h-full flex justify-center items-center">
        <ComposableMap
            width={500}
            height={600}
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                scale: 400,
                center: [17.05291, 2.07035],
            }}
            className="max-w-full max-h-full"
        >
            <Geographies geography="/features.json">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography 
                            key={geo.rsmKey} 
                            geography={geo} 
                            className={`fill-transparent ${isDarkTheme ? 'stroke-white' : 'stroke-black'}`} 
                        />
                    ))
                }
            </Geographies>

            <Marker
                coordinates={[36.8219, 1.2921]}
                style={{
                    default: {
                        width: '30',
                        height: '30',
                    },
                }}
            >
                <MapPin />
            </Marker>
        </ComposableMap>
    </div>
);

export default Map;
