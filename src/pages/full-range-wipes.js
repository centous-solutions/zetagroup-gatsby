import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Banner from "../components/full-range-wipes/banner";
import CustomWetWipes from "../components/full-range-wipes/customwetwipes";
import OurWipesSolutions from "../components/full-range-wipes/ourwipessolutions";
import Materials from "../components/full-range-wipes/materials";
import IngredientsAndFormulations from "../components/full-range-wipes/ingredientsandformulations";
import TailoredFormulations from "../components/full-range-wipes/tailoredformulations";
import PackagingSoutions from "../components/full-range-wipes/packagingsoutions";
import DesignAssistance from "../components/full-range-wipes/designassistance";
import Certified from "../components/full-range-wipes/certified";
import Form from "../components/full-range-wipes/form";
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
            <CustomWetWipes />
            <OurWipesSolutions />
            <Materials />
            <IngredientsAndFormulations />
            <TailoredFormulations />
            <PackagingSoutions />
            <DesignAssistance />
            <Certified />
            <Form />
            <EmailContact />
        </Layout>
    )
};

export default IndexPage;
