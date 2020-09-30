import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import ServicecardBmc from './ServicecardBmc';


export default class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
        }
    }

    mouseEnter = () => {
        this.setState({
            isShown: true,
        })
    }

    mouseLeave = () => {
        this.setState({
            isShown: false,
        })
    }
    render() {
        return (
            <section id="Services" style={{ backgroundColor: 'rgb(26, 123, 230, 0.06)' }} >
                <ReactBootStrap.Container className="s-container">
                    <div style={{ padding: 50 }} className="s-header">
                        <h2>Our services</h2>
                        <hr className="underline" />
                    </div>
                    <ReactBootStrap.Row className="service-box">
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring delay={500}
                                    to={{ opacity: isVisible ? 1 : 0.6 }}
                                >
                                    {({ opacity }) => (
                                        <ReactBootStrap.Col style={{ opacity }} md={5}>
                                            <div className="services-wrapper">
                                                <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                    <h2>Service Management</h2>
                                                    {this.state.isShown && (
                                                        <span>
                                                            ITSM,CMDB and Asset Management<br />

                                                HR/Case Management, Facilities Management<br />

                                                Request Management and workflows<br />

                                                Digital Workplace/Mobility<br />

                                                Discovery - Servers and Client Machines<br />
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </ReactBootStrap.Col>
                                    )}
                                </Spring>
                            )}
                        </VisibilitySensor>
                    </ReactBootStrap.Row>

                    {/* Service now and remedyforce cards */}
                    <ServicecardBmc />



                </ReactBootStrap.Container>
                <div className="git-banner">
                    <ReactBootStrap.Container fluid>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col md={8}>
                                <h1>Have something in mind?</h1>
                                <span>Let’s explore possibilities together</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md={4}>
                                <ReactBootStrap.Button href="#footer" style={{
                                    marginTop: 20,
                                    justifyContent: 'center',
                                    borderColor: 'snow',
                                    backgroundColor: 'tomato',
                                    outline: 'none',
                                    padding: 10,
                                    paddingLeft: 45,
                                    paddingRight: 45
                                }}>Get In Touch</ReactBootStrap.Button>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>
                </div>
            </section>
        )
    }
}
