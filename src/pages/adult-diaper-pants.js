import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import DifferentHeaderBanner from '../components/differentheaderbanner';
import bannerimg from '../assets/images/adult-diaper.jpg';
import UniqueAdvantages from '../components/adult-diaper-pants/uniqueadvantages';
import CustomizableItems from '../components/adult-diaper-pants/customizableitems';
import SizesOffered from '../components/adult-diaper-pants/sizesoffered';
import UniqueIdentitySolution from '../components/adult-diaper-pants/uniqueidentitysolution';
import Certified from '../components/certified';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';

const AdultDiaperPantsPage = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <DifferentHeaderBanner
                image={bannerimg}
                imgalt="adult diaper"
                title="Adult Diapers and Pants"
                description="Our adult diaper pants are made with high quality materials to ensure maximum comfort and superior absorbency. We offer several tiers of diaper pants at various price options to meet the needs of diverse retail channels."
            />
            <UniqueAdvantages />
            <CustomizableItems />
            <SizesOffered />
            <UniqueIdentitySolution />
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

export default AdultDiaperPantsPage;
