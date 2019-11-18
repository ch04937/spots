import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class AppMap extends Component {
    static defaultProps = {
        center: {
            lat: 29.74,
            lng: -95.35
        },
        zoom: 11
    };
    render() {
        return (
            <div className = "AppMap-container" style ={{ height: '80vh', width:'70%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: ''}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    

                </GoogleMapReact>
                <div className="AppMap-links">
                </div>
            </div>
        );
    }
};

export default AppMap; 