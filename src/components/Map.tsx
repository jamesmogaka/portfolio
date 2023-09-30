import React from 'react';
import ReactDOM from 'react-dom';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

//
//This is a map that will be displayed on the right of the contact form
//
//This function is to return a react functional component wihtout properties
//TODO: Style the map !!!
const Map: React.FC = () => (
    <div>
        <ComposableMap>
            <Geographies geography="/features.json">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    </div>
);

export default Map;
