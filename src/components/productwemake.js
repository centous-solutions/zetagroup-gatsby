import React from 'react';

const ProductWeMake = ({ productMakeData, additionalClass }) => {
    return (
        <section className={`pt-80 ${additionalClass}`}>
            <div className="container">
                <div className="product-make-dls pb-46">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-product-name">
                                <h2>{productMakeData?.sectionTitle}</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-product-dls">
                                <div dangerouslySetInnerHTML={{ __html: productMakeData?.description }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-make-listing">
                    {productMakeData?.addProducts?.map((product, index) => (
                        <div className={`row ${index % 2 === 0 ? "" : " flex-row-reverse"}`} key={index}>
                            <div className="col-md-6">
                                <div className="pro-listing-img">
                                    <img src={product?.productImage?.node?.sourceUrl} alt={product?.productImage?.node?.altText} />
                                </div>
                            </div>
                            <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-1'}`}>
                                <div className="pro-listing-dls">
                                    <h3>{product?.productName}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: product?.productDescription }} />
                                    {product?.productTypes && (
                                        <ul>
                                            {product?.productTypes?.map((feature, featureIndex) => (
                                                <li key={"feature-" + featureIndex}>{feature?.productType}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {product?.productCtaButton && (
                                        <a href={product?.productCtaButton?.url} className="btn btn-primary" target={product?.productCtaButton?.target}>
                                            {product?.productCtaButton?.title}
                                            <span>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25L6.25 1.25C5.83579 1.25 5.5 1.58579 5.5 2C5.5 2.41421 5.83579 2.75 6.25 2.75H12.25V8.75C12.25 9.16421 12.5858 9.5 13 9.5C13.4142 9.5 13.75 9.16421 13.75 8.75L13.75 2ZM2 13L2.53033 13.5303L13.5303 2.53033L13 2L12.4697 1.46967L1.46967 12.4697L2 13Z"
                                                        fill="white"/>
                                                </svg>
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ProductWeMake;
