import BingMapsReact from "bingmaps-react";
import React from "react";

import './BingMap.css'


/* Locations  */
const amamAmsterdam = {
  center: {
    latitude: 52.3450,
    longitude: 4.9171,
  },
  options: {
    title: "AMAM Amsterdam",
  },
};
const syleSydney = {
  center: {
    latitude: -33.870453,
    longitude: 151.208755,
  },
  options: {
    title: "SYLE Sydney",
  },
};
const varoValencia = {
  center: {
    latitude: 39.469331575108804,
    longitude: -0.37459366669866606,
  },
  options: {
    title: "VARO Valencia",
  },
};

const pushPins = [amamAmsterdam, syleSydney, varoValencia]

/* Map display */
class BingMap extends React.Component {
  render() {

    return (
      <div className="Maps">
        <BingMapsReact
          pushPins={pushPins}
          bingMapsKey="AnzQdBgh0eRESU6oN4gyIJOgXt_TZzn1WWbQrHOM4JuzFzbI9KHKHIz7hPcFYRnx"
          height='900px'
          mapOptions={{
            navigationBarMode: "compact",
          }}

          viewOptions={{
            zoom: 2.5,
            mapTypeId: "canvasDark",
          }}
        />

      </div>

    );
  }
}
export default BingMap