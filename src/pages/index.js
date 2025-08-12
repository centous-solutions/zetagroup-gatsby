import React from "react";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/home/banner";
import ProductWeMake from "../components/home/productwemake";
import ManufacturingPartner from "../components/home/manufacturingpartner";
import TurnkeyProcess from "../components/home/turnkeyprocess";
import EcoFriendlyCare from "../components/home/ecofriendlycare";
import OurBrands from "../components/home/ourbrands";
import ZetaGroupSuccess from "../components/home/zetagroupsuccess";
import Video from "../components/home/video";
import GlobalPresence from "../components/home/globalpresence";
import Form from "../components/home/form";
import EmailContact from "../components/emailcontact";

const IndexPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout>
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <Banner />
            <ProductWeMake />
            <ManufacturingPartner />
            <TurnkeyProcess />
            <EcoFriendlyCare />
            <OurBrands />
            <ZetaGroupSuccess />
            <Video />
            <GlobalPresence />
            <Form />
            <EmailContact />
        </Layout>
    )
};

export default IndexPage;
