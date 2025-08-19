import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import WrappedHeaderBanner from "../components/wrappedheaderbanner";
import ProductWeMake from "../components/productwemake";
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
    const seoData = props.data?.site?.siteMetadata || {};
    const { allWpPage } = props.data;
    const homePageData = allWpPage?.edges?.[0]?.node?.acfblocks?.blocks || [];
    const bannerData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksHeroBannerLayout");
    const productMakeData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksProductsWeMakeLayout");
    const manufacturingPartnerData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksYourManufacturingPartnerLayout");
    const turnkeyProcessData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksOurTurnkeyProcessLayout");
    const ecoFriendlyCareData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksPioneeringEcoFriendlyPersonalCareLayout");
    const brandData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksOurBrandsLayout");
    const zetaGrpSuccessData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksWhatDrivesZetaGroupsSuccessLayout");
    const videoData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksVideoAndBackgroundImageLayout");
    const globalPresenceData = homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksGlobalPresenceLayout");

    return (
        <Layout headerClass="header-main white-bg-header">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksHeroBannerLayout") ? (
                <WrappedHeaderBanner
                    imgalt={bannerData?.backgroundVideo?.node?.altText || "Zeta Group Banner"}
                    title={bannerData?.heading || "Welcome to Zeta Group"}
                    videoLink={bannerData?.backgroundVideoLink}
                    videoWithUrl={bannerData?.videoWithUrl}
                    video={bannerData?.backgroundVideo?.node?.sourceUrl}
                />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksProductsWeMakeLayout") ? (
                <ProductWeMake productMakeData={productMakeData} additionalClass="product-make-wrap bg-sky" />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksYourManufacturingPartnerLayout") ? (
                <ManufacturingPartner manufacturingPartnerData={manufacturingPartnerData} />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksOurTurnkeyProcessLayout") ? (
                <TurnkeyProcess turnkeyProcessData={turnkeyProcessData} />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksPioneeringEcoFriendlyPersonalCareLayout") ? (
                <EcoFriendlyCare ecoFriendlyCareData={ecoFriendlyCareData} />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksOurBrandsLayout") ? (
                <OurBrands brandData={brandData} />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksWhatDrivesZetaGroupsSuccessLayout") ? (
                <ZetaGroupSuccess zetaGrpSuccessData={zetaGrpSuccessData} />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksVideoAndBackgroundImageLayout") ? (
                <Video videoData={videoData} />
            ) : null}
            { homePageData?.length > 0 && homePageData?.find((data) => data?.__typename === "WpAcfblocksBlocksGlobalPresenceLayout") ? (
                <GlobalPresence globalPresenceData={globalPresenceData} />
            ) : null}
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
                            __typename
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
