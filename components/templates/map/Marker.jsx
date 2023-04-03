import { useState, useEffect } from "react";

export function Marker({ address, ...options }) {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      const contentString = `<div style='color: black;'>${address}</div>`;
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
      });
      infowindow.open({
        anchor: marker,
      });
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
        });
      });
    }
  }, [marker, options]);

  return null;
}
