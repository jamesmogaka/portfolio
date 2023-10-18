import React from 'react';
import ReactDOM from 'react-dom';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from 'react-simple-maps';
import styled from 'styled-components';
//
//Styling the map
const Styled_geography = styled(Geography)`
    fill: black;
`;
//
// //Hide the overflow of the map
// const Map_container = styled.div`
//     height: 100vh;
//     margin: 0px;
//     padding: 0px;
// `;
//
//This is a map that will be displayed on the right of the contact form
//
//This function is to return a react functional component wihtout properties
//TODO: Style the map !!!
const Map: React.FC = () => (
    <ComposableMap
        width={1000}
        height={1000}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
            rotate: [-10.0, -52.0, 0],
            scale: 400,
        }}
    >
        <Geographies geography="/features.json">
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Styled_geography key={geo.rsmKey} geography={geo} />
                ))
            }
        </Geographies>
        <Annotation
            subject={[36.8219, -1.2864]}
            dx={40}
            dy={-20}
            connectorProps={{
                stroke: '#FF5533',
                strokeWidth: 3,
                strokeLinecap: 'round',
            }}
        >
            {'Nairobi'}
        </Annotation>
    </ComposableMap>
);

export default Map;
