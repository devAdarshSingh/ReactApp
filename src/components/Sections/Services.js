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
        const images = [
            '/assets/services.jpeg',
            '/assets/546187.jpg',
            '/asstes/s-col-1.jpg',
            '/assets/bgPattern.png',
        ]
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
                                    to={{ opacity: isVisible ? 1 : 0.9 }}
                                >
                                    {({ opacity }) => (
                                        <>
                                            {/* service management */}
                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div style={{
                                                    backgroundImage:'url("/assets/services.jpeg")'
                                                }} className="services-wrapper">
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
                                            {/* Automation */}
                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/546187.jpg")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Automation</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                Orchestration<br />

                                                                Cloud Management<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>
                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/s-col-1.jpg")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Sec-Ops</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                Security Operations - Service Now<br />

                                                Identity and Access Management<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>

                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/bgPattern.png")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Operations</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                Discovery and Service Mapping<br />
                                                                Event Management<br />
                                                                Application Performance Monitoring<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>

                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/546187.jpg")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Performance Testing</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                Load Runner, Scapa, Selenium<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>

                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/s-col-1.jpg")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Business Intelligence and Dashboards</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                Reporting/ Analytics<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>

                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/services.jpeg")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Integrations</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                BMC and ServiceNow Platform-<br />
                                                                LDAP/SSO, SCCM, BOMGAR, Oracle APEX, xMatters,Splunk, <br/>
                                                                Jira Solarwinds, uCMDB, Appdynamics, TrueSight(BPPM),<br/> 
                                                                CTI/IVR(Cisco, Twilio), SMS, Arago, Amazon Alexa, Slack, E-Bonding<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>

                                            <ReactBootStrap.Col style={{ opacity }} md={6}>
                                                <div className="services-wrapper" style={{
                                                    backgroundImage: 'url("/assets/546187.jpg")'
                                                }}>
                                                    <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="services-container">
                                                        <h2>Custom Application Development</h2>
                                                        {this.state.isShown && (
                                                            <span>
                                                                BMC and ServiceNow Platform<br />
                                                                Java, Java-Script<br />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </ReactBootStrap.Col>
                                        </>
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
