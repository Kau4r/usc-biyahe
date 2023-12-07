'use client'

import {  useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, useGoogleMap } from "@react-google-maps/api";
import { useEffect, useRef, useState }  from "react";
import styles from "@/app/components/map.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBF8tm3ds5kJQ7l7VbQcqWQQZkUy1AFgKM",
    libraries: ["places"],
  });

  const [ center, setCenter ] = useState({ lat: 10.332615673533242, lng: 123.90974285444454 })

  const [ zoom, setZoom ] = useState(13)

  // For getting location

  const [ location, setLocation ] = useState(0)

  const [ metrics, setMetrics ] = useState(0)

  const geocoder = useRef(null)

  useEffect(() => {
    if (isLoaded) {
      geocoder.current = new window.google.maps.Geocoder()
    }
  }, [isLoaded])

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
      setLocation(1)
      if (geocoder.current) {
        geocoder.current.geocode({ location: center}, (res, stat) => {
          if (stat === 'OK') {
            console.log(res[0].formatted_address)
          }
        })
      }
    } catch (error) {
      console.error('Error getting location')
    }
  }

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
    setLocation(0)
    setMetrics(1)
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setLocation(0)
    setMetrics(0)
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  const cebuBounds = {
    north: 10.3597,
    south: 10.2257,
    east: 123.9227,
    west: 123.8001,
  };

  return (
    <div className={styles.container}>
      <button className={styles.location} onClick={getLoc}>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
      <div className={styles.overlay}>
        <div className={styles.inputContainer}>
          <Autocomplete bounds={cebuBounds}>
            <input
              type="text"
              placeholder="Start Point"
              ref={originRef}
              className={styles.textInput}
            />
          </Autocomplete>
          <Autocomplete bounds={cebuBounds}>
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
        <div className={metrics === 0 ? styles.hide : styles.metrics }>
          {/* Distance & Duration */}
          <div className={styles.tblHead}>
            <div className={styles.col_2}>
              <span className={styles.tblHeadtxt}>Distance</span>
            </div>
            <div className={styles.col_2}>
              <span className={styles.tblHeadtxt}>Duration</span>
            </div>
          </div>
          <div className={styles.tblCont}>
            <div className={styles.col_2}>
              <span className={styles.tbltxt}>{distance}</span>
            </div>
            <div className={styles.col_2}>
              <span className={styles.tbltxt}>{duration}</span>
            </div>
          </div>
          {/* Cost */}
          <div className={styles.tblHead}>
            <div className={styles.col_3}>

            </div>
            <div className={styles.col_3}>
              <span className={styles.tblHeadtxt}>Traditional</span>
            </div>
            <div className={styles.col_3}>
              <span className={styles.tblHeadtxt}>Modern</span>
            </div>
          </div>
          <div className={styles.tblCont}>
            <div className={styles.col_3}>
              <span className={styles.tbltxt}>Standard</span>
            </div>
            <div className={styles.col_3}>
              <span className={styles.tbltxt}>Php {15 + (distance < 4 ? 0 : (distance - 4) * 1.5)}</span>
            </div>
            <div className={styles.col_3}>
              <span className={styles.tbltxt}>Php {13 + (distance < 4 ? 0 : (distance - 4) * 1.5)}</span>
            </div>
          </div>
          <div className={styles.tblCont}>
            <div className={styles.col_3}>
              <span className={styles.tbltxt}>Discount</span>
            </div>
            <div className={styles.col_3}>
              <span className={styles.tbltxt}>Php {12 + (distance < 4 ? 0 : (distance - 4) * 1.5)}</span>
            </div>
            <div className={styles.col_3}>
              <span className={styles.tbltxt}>Php {11 + (distance < 4 ? 0 : (distance - 4) * 1.5)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        {/* Google Map Box */}
        <GoogleMap center={center} zoom={zoom} mapContainerStyle={{ width: "100%", height: "100%" }} options={{
            zoomControl: false,
            streetViewControl:false,
            mapTypeControl: false,
            fullscreenControl: false, }}
          onLoad={(map) => setMap(map)}>
            <Marker position={location === 0 ? null : center} />
            {directionsResponse && ( <DirectionsRenderer directions={directionsResponse} /> )}
        </GoogleMap>
      </div>
    </div>
  );
}