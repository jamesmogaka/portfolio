import React from 'react';
import ReactDOM from 'react-dom';
import { MapPin } from 'react-feather';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps';
import styled from 'styled-components';
import Destination from './Destination';
//
//Styling the map
const Styled_geography = styled(Geography)`
    fill: transparent;
    stroke: black;
`;
//
// //Hide the overflow of the map
// const Map_container = styled.div`
//     height: 100vh;
//     margin: 0px;
//     padding: 0px;
// `;
//
//This is a map that will be displayed  on the right of the contact form
//
//This function is to return a react functional component wihtout properties
//TODO: Style the map !!!
const Map: React.FC = () => (
    <ComposableMap
        width={500}
        height={600}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
            scale: 400,
            center: [17.05291, 2.07035],
        }}
    >
        <Geographies geography="/features.json">
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Styled_geography key={geo.rsmKey} geography={geo} />
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
);

export default Map;
