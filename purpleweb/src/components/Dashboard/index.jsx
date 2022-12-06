import React from "react";

import Header from "./Header";
import Selects from "./Selects";
import Games from "./Games";

import Footer from "../WebSite/Footer";

export default function Dashboard() {
    return (
        <React.Fragment>
            <Header />
            <Selects />
            <Games />
            <Footer />
        </React.Fragment>
    )
}