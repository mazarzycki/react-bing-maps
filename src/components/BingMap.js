import BingMapsReact from "bingmaps-react";
import React from "react";
import { Modal, Button } from 'react-bootstrap'


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
function BingMap() {

  return (
    <div onClick={() => { this.handleModal() }}>
      <BingMapsReact
        /* pushPins={<Button onClick={()=>{this.handleModal()}}>pushPins</Button>} */

        pushPins={pushPins}
        bingMapsKey="AnzQdBgh0eRESU6oN4gyIJOgXt_TZzn1WWbQrHOM4JuzFzbI9KHKHIz7hPcFYRnx"
        height='500px' /* full screen = 900px */
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

/* Modal */




export default BingMap