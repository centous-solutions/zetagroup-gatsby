import React from 'react';
import designAssistant from '../../assets/images/design-assistant.jpg';

const DesignAssistance = () => {
    return (
        <section className="bg-sky-primary manu-parter-reverse design-assistance-sec">
            <div className="manu-parter-dls">
                <div className="manu-parter-dls-img">
                    <img src={designAssistant} alt="design assistant" />
                </div>
                <div className="container">
                    <div className="manu-parter-dls-txt">
                        <h2>Design assistance for your brand</h2>
                        <p>
                            Our experienced design team expertly handles the technical requirements for packaging,
                            ensuring compliance with stringent specifications. We help to create and approve packaging
                            designs to align with your brand identity while meeting regulatory standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DesignAssistance;
