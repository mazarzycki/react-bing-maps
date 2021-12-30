import React from "react";
import './LocationInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faLaptopCode, faMapMarkerAlt, faNetworkWired, faPowerOff, faUsers } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable';
import photo from './chart.png'

/* Info  */

class LocationInfo extends React.Component {
  render() {
    return (
      <Draggable>
        <div className="Info-Main">
          <div>
            <div className="Info-Header" bg="secondary" closeButton>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> AMAM Amsterdam Office
            </div>
            <div >
              <div className="Info-Upper">
                <div className="Info-Upper-Left">
                  <ul>
                    <li><b>Status: </b> UP</li>
                    <li><b>Address:</b> Amstelplein 1 18th Floor</li>
                    <li><b>City:</b> Amsterdam</li>
                    <li><b>Country:</b> Netherlands</li>
                    <li><b>Region:</b> EMEA</li>
                  </ul>

                </div>
                <div className="Info-Upper-Right">
                  <ul>
                    <li><FontAwesomeIcon className="Icon" icon={faUsers} /> 38</li>
                    <li><FontAwesomeIcon className="Icon" icon={faLaptopCode} /> 243</li>
                    <li><FontAwesomeIcon className="Icon" icon={faNetworkWired} /> 853</li>
                    <li><FontAwesomeIcon className="Icon" icon={faBolt} /> 12.0 kw</li>
                  </ul>

                </div>

              </div>
              <div className="Info-Middle">
                <button><FontAwesomeIcon className="Icon" icon={faLaptopCode} />Devices</button>
                <button><FontAwesomeIcon className="Icon" icon={faPowerOff} />Power</button>
                <button><FontAwesomeIcon className="Icon" icon={faNetworkWired} />Network</button>
              </div>
              <div className="Info-Bottom">
                <img src={photo}></img>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default LocationInfo;