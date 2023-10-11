import React from "react";
import Navbar from '../Components/Index/Navbar.jsx';
import Header from '../Components/Index/HeaderHome.jsx';
import Footer from '../Components/Index/FooterHome.jsx';
import Main from '../Components/Index/Top3Home.jsx';
import Body from '../Components/Index/BodyHome.jsx';

function Index() {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Main></Main>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}
export default Index;