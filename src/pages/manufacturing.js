import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import WrappedHeaderBanner from '../components/wrappedheaderbanner';
import bannerimg from '../assets/images/sustainable-manufacturing.jpg';
import ZetaGroupInNumbers from '../components/manufacturing/zetagroupinnumbers';
import AdvanceTechnologyAndEquipment from '../components/manufacturing/advancetechnologyandequipment';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';

const Manufacturing = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main white-bg-header">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <WrappedHeaderBanner
                img={bannerimg}
                imgalt="sustainable manufacturing"
                title="Sustainable Manufacturing"
                description="Where sustainability meets innovation. We combine the finest natural ingredients with advanced technology to create high-quality, eco-friendly personal care products."
            />
            <ZetaGroupInNumbers />
            <AdvanceTechnologyAndEquipment />
            <Form
                title='Start your project today!'
                description='See how we can make a difference to your next project. Simply complete our contact form and one of our team members will get back to you as soon as possible.'
            />
            <EmailContact />
        </Layout>
    )
};

export default Manufacturing;
