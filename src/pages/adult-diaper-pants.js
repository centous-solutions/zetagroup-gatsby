import React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo';

const AdultDiaperPantsPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            {/* <BabyNappiesPants />
            <ComprehensiveOptions />
            <CustomizableBabyNappies />
            <CustomizableBabyNappiesList />
            <LeakGuardTechnology />
            <TailoredSizingSolutions />
            <AddOnFeatures />
            <Certified />
            <Form />
            <EmailContact /> */}
        </Layout>
    )
};

export default AdultDiaperPantsPage;
