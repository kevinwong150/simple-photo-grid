import React from "react";
import PhotoGrid from "./PhotoGrid";
import PhotoInput from "./PhotoInput";
import PhotoContext from "./PhotoContext";
import logo from "../assets/logo.png";
import "../style/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updatePhotos = (photos) => {
      this.setState(state => ({
        photos: photos
      }));
    };

    this.state = {
      photos: "",
      updatePhotos: this.updatePhotos,
    };
  }

  render() {
    return (
      <PhotoContext.Provider value={this.state}>
        <div className="page">
          <header className="page-header">
            <img src={logo} className="page-header-logo" alt="logo" />
            SimplePhotoGrid
          </header>
          <main className="page-body">
            <PhotoInput></PhotoInput>
            <PhotoGrid></PhotoGrid>
          </main>
        </div>
      </PhotoContext.Provider>
    );
  }
}

export default App;
