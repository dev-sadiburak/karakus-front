import React from 'react';
import './Quickstart.css';


function Quickstart() {
    return (
        <div className="quickstart-container">
            <img src="/karakus_logo.png" className="quickstart-logo" alt="karakus logo" />
            <div className="quickstart-header">
                Generative AI Platform
            </div>
            <div className="quickstart-description">
                Karakus is a platform that allows you to create, manage, and deploy generative AI models with ease.Karakus is a platform that allows you to create, manage, and deploy generative AI models with ease.Karakus is a platform that allows you to create, manage, and deploy generative AI models with ease.
            </div>
            <button className="quickstart-button">Developer Quickstart</button>
        </div>
    );
}
export default Quickstart;