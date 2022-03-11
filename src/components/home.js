import React from "react";
import Footer from "./Footer";
import LandingHeader from "./landingHeader";
import MainInterface from "./main";
import TopNavBar from "./topNavBar";

class Home extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar/>
                <LandingHeader/>
                <MainInterface/>
                <Footer/>
            </div>
        );
    }
}

export default Home;