import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import WrappedHeaderBanner from "../components/wrappedheaderbanner";
import bannerimg from '../assets/images/zeta-group-slider.gif';
import ProductWeMake from "../components/home/productwemake";
import ManufacturingPartner from "../components/home/manufacturingpartner";
import TurnkeyProcess from "../components/home/turnkeyprocess";
import EcoFriendlyCare from "../components/home/ecofriendlycare";
import OurBrands from "../components/home/ourbrands";
import ZetaGroupSuccess from "../components/home/zetagroupsuccess";
import Video from "../components/home/video";
import GlobalPresence from "../components/home/globalpresence";
import Form from "../components/form";
import EmailContact from "../components/emailcontact";

const IndexPage = (props) => {
    console.log('props', props)
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main white-bg-header">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <WrappedHeaderBanner
                img={bannerimg}
                imgalt=""
                title="We specialize in crafting innovative personal care products with a full-service approach."
            />
            <ProductWeMake />
            <ManufacturingPartner />
            <TurnkeyProcess />
            <EcoFriendlyCare />
            <OurBrands />
            <ZetaGroupSuccess />
            <Video />
            <GlobalPresence />
            <Form
                title='Partner with us'
                description='Complete our form below, and one of our team members will get back to you as soon as possible!'
            />
            <EmailContact />
        </Layout>
    )
};

export default IndexPage;
export const query = graphql`
    query Home {
        allWpPage(filter: {slug: {eq: "home"}}) {
            edges {
                node {
                    acfblocks {
                        blocks {
                            ... on WpAcfblocksBlocksHeroBannerLayout {
                                backgroundVideoLink
                                fieldGroupName
                                heading
                                videoWithUrl
                                backgroundVideo {
                                    node {
                                        sourceUrl
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksProductsWeMakeLayout {
                                description
                                fieldGroupName
                                sectionClass
                                sectionTitle
                                productTypeWithTitle
                                addProducts {
                                    productCtaButton {
                                        target
                                        title
                                        url
                                    }
                                    productImage {
                                        node {
                                            sourceUrl
                                        }
                                    }
                                    productTypes {
                                        productType
                                    }
                                    productTypesWithTitle {
                                        productTypes {
                                            keyPoint
                                        }
                                        title
                                    }
                                    productName
                                    productDescription
                                }
                            }
                            ... on WpAcfblocksBlocksYourManufacturingPartnerLayout {
                                description
                                sectionTitle
                                subHeading
                                image {
                                    node {
                                        sourceUrl
                                        title
                                    }
                                }
                                ctaButton {
                                    target
                                    title
                                    url
                                }
                            }
                            ... on WpAcfblocksBlocksOurTurnkeyProcessLayout {
                                description
                                heading
                                processSteps {
                                    stepDescription
                                    stepIcon {
                                        node {
                                            sourceUrl
                                            altText
                                            title
                                        }
                                    }
                                    stepLink {
                                        target
                                        title
                                        url
                                    }
                                    stepName
                                }
                                ctaButton {
                                    target
                                    title
                                    url
                                }
                            }
                            ... on WpAcfblocksBlocksPioneeringEcoFriendlyPersonalCareLayout {
                                sectionTitle
                                descriptions {
                                    description
                                }
                                ecoFriendlyKeyPoints {
                                    keyPoint
                                    description
                                    iconImage {
                                        node {
                                            altText
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksOurBrandsLayout {
                                description
                                sectionTitle
                                imageSlider {
                                    brandLogo {
                                        node {
                                            sourceUrl
                                            title
                                            altText
                                        }
                                    }
                                    image {
                                        node {
                                            sourceUrl
                                            title
                                            altText
                                        }
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksWhatDrivesZetaGroupsSuccessLayout {
                                sectionTitle
                                description
                                statistics {
                                    statisticsPostfix
                                    statisticsNumber
                                    statisticsLabel
                                }
                                ctaButton {
                                    target
                                    title
                                    url
                                }
                            }
                            ... on WpAcfblocksBlocksVideoAndBackgroundImageLayout {
                                fieldGroupName
                                video {
                                    node {
                                        sourceUrl
                                    }
                                }
                                backgroundImage {
                                    node {
                                        altText
                                        sourceUrl
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksGlobalPresenceLayout {
                                bottomTitle
                                description
                                ctaButton {
                                    url
                                    title
                                    target
                                }
                                backgroundImage {
                                    node {
                                        sourceUrl
                                    }
                                }
                                sectionTitle
                            }
                        }
                    }
                }
            }
        }
    }
`;
