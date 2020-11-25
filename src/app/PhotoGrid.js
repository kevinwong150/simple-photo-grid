import React from "react";
import PhotoContext from "./PhotoContext";
import PhotoImage from "./PhotoImage";
import "../style/photoGrid.scss";

class PhotoGrid extends React.Component {
  static contextType = PhotoContext;

  constructor(props) {
    super(props);
    this.state = {
      hasGap: true,
      hasRoundCorner: true
    };
  }

  getPhotoImages(context) {
    if (typeof(context.photos) === 'string' && context.photos !== "") {
      return context.photos.split("|").map((src, index) => {
        return <PhotoImage key={src + index} src={src} index={index}/>
      });
    }
  }

  render() {
    const { hasGap, hasRoundCorner } = this.state;

    return (
      <div className={"photo-grid " + (!this.context.photos ? "mod-empty " : " ") + (hasGap ? "mod-gap " : " ")  + (hasRoundCorner ? "mod-round-corner " : " ")}>
        { this.context.photos ? 
          this.getPhotoImages(this.context) :
          "Please at least input an image url."
        }
      </div>
    );
  }
}

export default PhotoGrid;
