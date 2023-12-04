import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import styles from "@/app/map.module.css";

const center = { lat: 10.332615673533242, lng: 123.90974285444454 };

export default function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBF8tm3ds5kJQ7l7VbQcqWQQZkUy1AFgKM",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.TRANSIT,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.inputContainer}>
          <Autocomplete>
            <input
              type="text"
              placeholder="Origin"
              ref={originRef}
              className={styles.textInput}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              placeholder="Destination"
              ref={destiantionRef}
              className={styles.textInput}
            />
          </Autocomplete>
          <div className={styles.buttonContainer}>
            <button
              onClick={calculateRoute}
              className={styles.button}
              style={{ background: "#4CAF50", color: "white" }}
            >
              Calculate Route
            </button>
            <button
              onClick={clearRoute}
              className={styles.button}
              style={{ background: "#f44336", color: "white" }}
            >
              Clear Route
            </button>
          </div>
        </div>
        <div className={styles.distanceDurationContainer}>
          <span>Distance: {distance}</span>
          <span>Duration: {duration}</span>
        </div>
      </div>
      <div className={styles.mapContainer}>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
