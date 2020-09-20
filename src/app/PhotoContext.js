import React from "react";

const defaultValue = {
  photos: "",
  updatePhotos: () => {},
}

const PhotoContext = React.createContext(defaultValue);

export default PhotoContext;
