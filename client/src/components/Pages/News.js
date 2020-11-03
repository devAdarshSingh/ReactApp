import React from 'react';
import '../../App.css';
import * as ReactBootStrap from 'react-bootstrap';
import Footer from '../layout/Footer'

function News() {
    return (
        <>
            <ReactBootStrap.Breadcrumb>
                <ReactBootStrap.Breadcrumb.Item href="/">Home</ReactBootStrap.Breadcrumb.Item>
                <ReactBootStrap.Breadcrumb.Item active>News</ReactBootStrap.Breadcrumb.Item>
            </ReactBootStrap.Breadcrumb>

            <Footer />
        </>
    );
}

export default News;
