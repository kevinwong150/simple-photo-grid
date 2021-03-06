import React from "react";
import Util from "../util";
import PhotoContext from "./PhotoContext";
import "../style/photoInput.scss";

class PhotoInput extends React.Component {
  static contextType = PhotoContext;

  constructor(props) {
    super(props);
    this.state = {
      photos: this.getSamplePhotos(5),
    };
    this.handleSample = this.handleSample.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
  }

  handleChange(event) {
    this.setState({
      photos: event.target.value,
    });
  }

  getPhotosCount(photos) {
    return photos.split("|").filter((e) => e).length;
  }

  handleSample() {
    this.setState({
      photos: this.getSamplePhotos(10),
    });
  }

  getSamplePhotos(count) {
    return(
      [...Array(count).keys()]
        .map(() => {
          return Util.getRandomSizeCat(200, 400);
        })
        .join(`|\r`)
    );
  }

  handleFormat() {
    this.setState({
      photos: this.state.photos.split("|").map(e => e.trim()).join(`|\r`),
    });
  }

  handleClear() {
    this.setState({
      photos: "",
    });
  }

  handleSubmit() {    
    this.context.updatePhotos(this.state.photos.split("|").filter(e => e).join(`|`));
  }

  handleFalse() {
    return false;
  }

  render() {
    return (
      <div className="photo-input">
        <div className="photo-input-top">
          <div className="photo-input-top-instruction">
            Please input all images url, separate each with a "<span style={{userSelect: "initial"}}>|</span>". Sample is as
            follow.<br/>
            <span className="mod-tip">
              (Tips: Check out Chrome Extension <a rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/image-url-oneclick/cbgokcojacngdokhalmlajpdjjkbdeob" target="_blank">Image URL Oneclick</a> for better opened image's url managing.)
            </span>
          </div>
          <dl className="photo-input-top-info">
            <dt>Count:</dt>
            <dd>{this.getPhotosCount(this.state.photos)}</dd>
          </dl>
        </div>
        <textarea
          className="photo-input-textarea"
          name="input-textarea"
          spellCheck="false"
          onChange={this.handleChange}
          value={this.state.photos}
        ></textarea>
        <div className="photo-input-buttons">
          <button
            className="photo-input-button mod-sample"
            onClick={this.handleSample}
          >
            Get Sample Images
          </button>
          <button
            className={"photo-input-button mod-format " + (this.state.photos ? "" : "mod-disabled")}
            onClick={this.state.photos ? this.handleFormat : this.handleFalse}
          >
            Format
          </button>
          <button
            className={"photo-input-button mod-clear " + (this.state.photos ? "" : "mod-disabled")}
            onClick={this.state.photos ? this.handleClear : this.handleFalse}
          >
            Clear
          </button>
          <button
            className={"photo-input-button mod-submit"}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoInput;
