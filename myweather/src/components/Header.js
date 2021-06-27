import React from "react";

const Header=()=>{
    return(
        <div className="bg-dark py-2">
            <h1 className="text-white">My Weather App</h1>
            <p className="text-white">{new Date().toLocaleDateString()}</p>
        </div>
    );
};

export default  Header;