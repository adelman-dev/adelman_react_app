
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';

function App() {
    return (
        <MapContainer center={[47.61715123413518, -122.15363276388577]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.61715123413518, -122.15363276388577]}>
                <Popup>
                    148th Ave & 8th St
                </Popup>
            </Marker>
        </MapContainer>
    );

}

export default App;
