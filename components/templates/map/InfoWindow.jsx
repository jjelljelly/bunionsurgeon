export function InfoWindow() {
  const contentString = "<div>Something or other</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });

  return <div>This is an info window</div>;
}
