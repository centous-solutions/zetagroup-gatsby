import * as React from "react";

function Seo({ description, title }) {

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* <meta name="image" content={title} /> */}
        </>
    )
};

export default Seo;
