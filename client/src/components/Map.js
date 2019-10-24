import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactMapGL from "react-map-gl";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/DeleteTwoTone";

const viewport = {
  latitude: 45.492117,
  longitude: -73.577016,
  zoom: 13
};
const Map = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ReactMapGL
        width="100vw"
        height="calc(100vh - 64px)"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiaW12YW1zaSIsImEiOiJjazI1N3BraDcybzhyM2NtdGRkcTJzaHZnIn0.iU9jbrYUsPRVtl5-rPiUYA"
        {...viewport}
      ></ReactMapGL>
    </div>
  );
};

const styles = {
  root: {
    display: "flex"
  },
  rootMobile: {
    display: "flex",
    flexDirection: "column-reverse"
  },
  navigationControl: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1em"
  },
  deleteIcon: {
    color: "red"
  },
  popupImage: {
    padding: "0.4em",
    height: 200,
    width: 200,
    objectFit: "cover"
  },
  popupTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
};

export default withStyles(styles)(Map);
