import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import CustomWetWipes from "../components/full-range-wipes/customwetwipes";
import Materials from "../components/full-range-wipes/materials";
import IngredientsAndFormulations from "../components/full-range-wipes/ingredientsandformulations";
import TailoredFormulations from "../components/full-range-wipes/tailoredformulations";
import PackagingSoutions from "../components/full-range-wipes/packagingsoutions";
import DesignAssistance from "../components/full-range-wipes/designassistance";
import Certified from "../components/certified";
import Form from "../components/form";
import EmailContact from "../components/emailcontact";
import { graphql } from "gatsby";
import WrappedHeaderBanner from "../components/wrappedheaderbanner";
import ProductWeMake from "../components/productwemake";

const FullRangeWipesPage = (props) => {
    console.log('props', props)
    const seoData = props.data?.site?.siteMetadata || {};
    const { allWpPage } = props.data;
    const fullRangeWipesPageData = allWpPage?.edges?.[0]?.node?.acfblocks?.blocks || [];
    const bannerData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksHeroBannerWithHeadingAndDescriptionLayout");
    const customWipesData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksKeyPointsLayout");
    const productMakeData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksProductsWeMakeLayout");
    const materialsData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksMaterialsSectionLayout");
    const featureFormulaData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksFeaturesFormulasLayout");
    const tailoredFormulaData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksRightImageLeftContentLayout");
    const packagingData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksPackagingSolutionsCardsLayout");
    const designAssistanceData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksLeftImageRightContentLayout");
    const brandSliderData = fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksLogoSliderLayout");

    return (
        <Layout headerClass="header-main white-bg-header">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksHeroBannerWithHeadingAndDescriptionLayout") ? (
                <WrappedHeaderBanner
                    img={bannerData?.image?.node?.sourceUrl}
                    imgalt={bannerData?.image?.node?.altText || bannerData?.image?.node?.title}
                    title={bannerData?.sectionTitle}
                    description={bannerData?.description}
                    bgPatch={true}
                />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksKeyPointsLayout") ? (
                <CustomWetWipes customWipesData={customWipesData} />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksProductsWeMakeLayout") ? (
                <ProductWeMake productMakeData={productMakeData} additionalClass="wipes-solution-sec bg-dark-sky" />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksMaterialsSectionLayout") ? (
                <Materials materialsData={materialsData} />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksFeaturesFormulasLayout") ? (
                <IngredientsAndFormulations featureFormulaData={featureFormulaData} />
            ) : null }
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksRightImageLeftContentLayout") ? (
                <TailoredFormulations leftContentRightImgData={tailoredFormulaData} />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksPackagingSolutionsCardsLayout") ? (
                <PackagingSoutions packagingData={packagingData} />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksLeftImageRightContentLayout") ? (
                <DesignAssistance leftImgRightContent={designAssistanceData} />
            ) : null}
            { fullRangeWipesPageData?.length > 0 && fullRangeWipesPageData?.find((data) => data?.__typename === "WpAcfblocksBlocksLogoSliderLayout") ? (
                <Certified brandSliderData={brandSliderData} />
            ) : null}
            <Form
                title='Start your project today!'
                description='See how we can make a difference to your next project. Simply complete our contact form and one of our team members will get back to you as soon as possible.'
            />
            <EmailContact />
        </Layout>
    )
};

export default FullRangeWipesPage;
export const query = graphql`
    query FullRangeofWipes {
        allWpPage(filter: {slug: {eq: "full-range-of-wipes"}}) {
            edges {
                node {
                    acfblocks {
                        blocks {
                            __typename
                            ... on WpAcfblocksBlocksHeroBannerWithHeadingAndDescriptionLayout {
                                chooseLayout
                                description
                                image {
                                    node {
                                        sourceUrl
                                        title
                                        altText
                                    }
                                }
                                sectionTitle
                            }
                            ... on WpAcfblocksBlocksKeyPointsLayout {
                                chooseLayoutradioButton
                                description
                                sectionTitle
                                keyPointsWithIcon
                                keyPoint {
                                    description
                                    iconSvg {
                                        node {
                                            sourceUrl
                                            altText
                                            title
                                        }
                                    }
                                    title
                                }
                            }
                            ... on WpAcfblocksBlocksProductsWeMakeLayout {
                                description
                                sectionClass
                                sectionTitle
                                productTypeWithTitle
                                addProducts {
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
                                    productImage {
                                        node {
                                            sourceUrl
                                            title
                                            altText
                                        }
                                    }
                                    productDescription
                                    productCtaButton {
                                        target
                                        title
                                        url
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksMaterialsSectionLayout {
                                sectionTitle
                                description
                                materials {
                                    title
                                    description
                                }
                            }
                            ... on WpAcfblocksBlocksFeaturesFormulasLayout {
                                description
                                sectionTitle
                                image {
                                    node {
                                        sourceUrl
                                        altText
                                        title
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksRightImageLeftContentLayout {
                                description
                                sectionTitle
                                image {
                                    node {
                                        sourceUrl
                                        altText
                                        title
                                    }
                                }
                                fullWidthImage
                                ctaButton {
                                    url
                                    title
                                    target
                                }
                            }
                            ... on WpAcfblocksBlocksPackagingSolutionsCardsLayout {
                                sectionTitle
                                description
                                cards {
                                    description
                                    title
                                    image {
                                        node {
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                            ... on WpAcfblocksBlocksLeftImageRightContentLayout {
                                description
                                descriptionWithTitle
                                image {
                                    node {
                                        sourceUrl
                                    }
                                }
                                layoutRadio
                                sectionDescription
                                sectionTitle
                                titleAndDescription {
                                    description
                                    title
                                    fieldGroupName
                                }
                                selectBackground
                            }
                            ... on WpAcfblocksBlocksLogoSliderLayout {
                                description
                                fieldGroupName
                                logos {
                                    nodes {
                                        sourceUrl
                                        altText
                                    }
                                }
                                sectionTitle
                            }
                        }
                    }
                }
                previous {
                    id
                }
            }
        }
    }
`;
