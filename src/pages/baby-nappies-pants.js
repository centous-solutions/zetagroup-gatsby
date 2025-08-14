import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import DifferentHeaderBanner from "../components/differentheaderbanner";
import bannerimg from '../assets/images/baby-napy-pants.jpg';
import ComprehensiveOptions from "../components/baby-nappies-pants/comprehensiveoptions";
import CustomizableBabyNappies from "../components/baby-nappies-pants/customizablebabynappies";
import CustomizableBabyNappiesList from "../components/baby-nappies-pants/customizablebabynappieslist";
import LeakGuardTechnology from "../components/baby-nappies-pants/leakguardtechnology";
import TailoredSizingSolutions from "../components/baby-nappies-pants/tailoredsizingsolutions";
import AddOnFeatures from "../components/baby-nappies-pants/addonfeatures";
import Certified from "../components/certified";
import Form from "../components/form";
import EmailContact from "../components/emailcontact";

const BabyNappiesPantsPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <DifferentHeaderBanner
                image={bannerimg}
                imgalt="baby napy pants"
                title="Baby Nappies and Pants"
                description="From our award winning sustainable plant based nappies to budget friendly options, we have a solution for you. All nappies are free from harsh chemicals and are rigorously tested."
            />
            <ComprehensiveOptions />
            <CustomizableBabyNappies />
            <CustomizableBabyNappiesList />
            <LeakGuardTechnology />
            <TailoredSizingSolutions />
            <AddOnFeatures />
            <Certified
                title='Our raw materials and products are tested or certified by the following organisations'
            />
            <Form
                title='Partner with us'
                description='Complete our form below, and one of our team members will get back to you as soon as possible!'
            />
            <EmailContact />
        </Layout>
    )
};

export default BabyNappiesPantsPage;
