import React from "react";
import PhotoContext from "./PhotoContext";
import PhotoImage from "./PhotoImage";
import "../style/photoGrid.scss";

class PhotoGrid extends React.Component {
  static contextType = PhotoContext;

  getPhotoImages(context) {
    if (typeof(context.photos) === 'string' && context.photos !== "") {
      return context.photos.split("|").map((src, index) => {
        return <PhotoImage key={src + index} src={src} index={index}/>
      });
    }
  }

  render() {
    return (
      <div className={"photo-grid " + (!this.context.photos ? "mod-empty" : "")}>
        { this.context.photos ? 
          this.getPhotoImages(this.context) :
          "Please at least input an image url."
        }
      </div>
    );
  }
}

export default PhotoGrid;
