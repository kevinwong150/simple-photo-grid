import React from "react";
import "../style/photoImage.scss";
import Util from "../util";

class PhotoImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
    };

    this.handleOnload = this.handleOnload.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleOnload() {
    this.setState({
      isLoading: false
    })
  }

  handleError() {
    this.setState({
      isError: true
    });
  }

  render() {
    return (
      <a className={"photo-image " + (this.state.isLoading ? "mod-loading " : "") + (this.state.isError ? "mod-error" : "")} href={this.props.src} target="_blank" rel="noopener noreferrer">
        <img
          key={"image:" + this.props.src}
          src={this.props.src}
          alt="" //empty alt hide the broken image icon onerror
          onLoad={this.handleOnload}
          onError={this.handleError}
          style={this.state.isLoading || this.state.isError ? {minHeight: Util.getRandomInRange(200, 400) + "px"} : {}}
        />
      </a>
    );
  }
}

export default PhotoImage;
