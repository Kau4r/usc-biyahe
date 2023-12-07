'use client'

import {  useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, } from "@react-google-maps/api";
import { useRef, useState }  from "react";
import styles from "@/app/components/map.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function App() {

  const [ center, setCenter ] = useState({ lat: 10.332615673533242, lng: 123.90974285444454 })

  const [ zoom, setZoom ] = useState(13)

  // For getting location

  const [ location, setLocation ] = useState()

  const getLoc = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        } else {
          reject( new Error('Not Supported'))
        }
      })
      setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
      setZoom(16)
      console.log(latitude)

    } catch (error) {
      console.error('Error getting location')
    }
  }
  
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
      <button className={styles.location} onClick={getLoc}>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
      <div className={styles.overlay}>
        <div className={styles.inputContainer}>
          <Autocomplete>
            <input
              type="text"
              placeholder="Start Point"
              ref={originRef}
              className={styles.textInput}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              placeholder="End Point"
              ref={destiantionRef}
              className={styles.textInput}
            />
          </Autocomplete>
          <button
            onClick={calculateRoute}
            className={styles.button}
            style={{ background: "#4CAF50", color: "white" }}
          >
            Calculate
          </button>
          <button
            onClick={clearRoute}
            className={styles.button}
            style={{ background: "#f44336", color: "white" }}
          >
            Clear
          </button>
        </div>
        <div className={styles.distanceDurationContainer}>
          <div className={styles.col_2}>
            <span>Distance:</span><h3 className={styles.calc}>{distance}</h3>
          </div>
          <div className={styles.col_2}>
            <span>Duration:</span><h3 className={styles.calc}>{duration}</h3>
          </div>
        </div>
        {/* Add Cost */}
        <div className={styles.costCont}>
          <div className={styles.col_2}>
            <span>Traditional</span>
          </div>
          <div className={styles.col_2}>
            <span>Modern</span>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={zoom}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}