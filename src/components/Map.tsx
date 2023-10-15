import React from 'react';
import ReactDOM from 'react-dom';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styled from 'styled-components';
//
//Styling the map
const Styled_geography = styled(Geography)`
    fill: black;
`;
//
//Hide the overflow of the map
const Map_container = styled.div`
    height: 100vh;
    margin: 0px;
    padding: 0px;
`;
//
//This is a map that will be displayed on the right of the contact form
//
//This function is to return a react functional component wihtout properties
//TODO: Style the map !!!
const Map: React.FC = () => (
    <Map_container>
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                scale: 500,
            }}
        >
            <Geographies geography="/features.json">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Styled_geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    </Map_container>
);

export default Map;
