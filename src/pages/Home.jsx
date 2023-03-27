import React from "react";
import { Categories, Navbar, Products } from "../components";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Products />
        </div>
    )
}

export default Home