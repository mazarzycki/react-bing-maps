import React from "react";
import { Button } from 'react-bootstrap';

/* Info  */

class LocationInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleInfo() {
    this.setState({ show: !this.state.show })
  }
  render() {

    return (
      <div onClick={() => { this.handleInfo() }}>

        <div show={this.state.show} onHide={() => this.handleInfo}>
          <div bg="secondary" closeButton>
            Location
          </div>
          <div>
            <div>
              Status:
            </div>
            <div>
              <Button>Devices</Button>
              <Button>Power</Button>
              <Button>Network</Button>
            </div>
            <div>
              Statistics about devices - wheel chart
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default LocationInfo;