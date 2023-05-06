import "./HomePage.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <React.Fragment>
        <Header />
        <div className="homePage">
            <h1>Home Page</h1>
        </div>
        <Footer />
    </React.Fragment>
  );
}

export default HomePage;