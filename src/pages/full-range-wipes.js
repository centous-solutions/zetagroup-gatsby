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
import Certified from "../components/certified";
import Form from "../components/form";
import EmailContact from "../components/emailcontact";

const FullRangeWipesPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main white-bg-header">
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
            <Certified
                title='Certified and Tested by Leading Organisations'
                description='Our raw materials and products are tested or certified by the following organisations'
            />
            <Form
                title='Start your project today!'
                description='See how we can make a difference to your next project. Simply complete our contact form and one of our team members will get back to you as soon as possible.'
            />
            <EmailContact />
        </Layout>
    )
};

export default FullRangeWipesPage;
