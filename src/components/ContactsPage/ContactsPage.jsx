// ContactsPage.jsx
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 50.4501, // Latitude for Kyiv, Ukraine
  lng: 30.5234  // Longitude for Kyiv, Ukraine
};

function ContactsPage() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h2>Контакти</h2>
        <LoadScript googleMapsApiKey="AIzaSyAkryeefsQg54tOfVW_uGbBrDg3_X0rwMU">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <Footer />
    </>
  );
}

export default ContactsPage;

