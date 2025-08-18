import React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo';
import Form from '../components/form';
import EmailContact from '../components/emailcontact';
import QuestionAnswer from '../components/faq/questionanswer';

const FAQ = (props) => {
    const seoData = props.data?.site?.siteMetadata || {};

    return (
        <Layout headerClass="header-main">
            <Seo
                title={seoData?.title}
                metaDesc={seoData?.metaDesc}
            />
            <QuestionAnswer />
            <Form
                title='Get in Touch'
                description='Have you a question or request? Fill out the form below, and our team will get back to you as soon as possible'
            />
            <EmailContact />
        </Layout>
    )
};

export default FAQ;
