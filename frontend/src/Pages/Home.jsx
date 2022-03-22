import React from "react";
import {Link} from "react-router-dom";

export default () => ({
    render() {
        return (
            <div className="home">
                <h1>Welcome to the home page</h1>
                <Link to="/about">About</Link>
            </div>
        );
    }
});