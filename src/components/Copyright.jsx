import React from "react";

function CopyrightSection() {
    const year=new Date().getFullYear();
    return (
        <footer className="footer-section">
            <p>copyright &copy; {year}</p>
        </footer> 
    );
}

export default CopyrightSection;