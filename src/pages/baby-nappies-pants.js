import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BabyNappiesPants from "../components/baby-nappies-pants/babynappiespants";
import ComprehensiveOptions from "../components/baby-nappies-pants/comprehensiveoptions";
import CustomizableBabyNappies from "../components/baby-nappies-pants/customizablebabynappies";
import CustomizableBabyNappiesList from "../components/baby-nappies-pants/customizablebabynappieslist";
import LeakGuardTechnology from "../components/baby-nappies-pants/leakguardtechnology";
import TailoredSizingSolutions from "../components/baby-nappies-pants/tailoredsizingsolutions";
import AddOnFeatures from "../components/baby-nappies-pants/addonfeatures";
import Certified from "../components/baby-nappies-pants/certified";
import Form from "../components/full-range-wipes/form";
import EmailContact from "../components/emailcontact";

const BabyNappiesPantsPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout>
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <BabyNappiesPants />
            <ComprehensiveOptions />
            <CustomizableBabyNappies />
            <CustomizableBabyNappiesList />
            <LeakGuardTechnology />
            <TailoredSizingSolutions />
            <AddOnFeatures />
            <Certified />
            <Form />
            <EmailContact />
        </Layout>
    )
};

export default BabyNappiesPantsPage;
