import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const About = () => {
    return (
        <section id="About">
            <div className="overlay-about-bg">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col md={12}>
                            <ReactBootStrap.Row className="about-contents">
                                <ReactBootStrap.Col lg={6}>
                                    <br />
                                    <h1>Who we are</h1>
                                    <br />
                                    <p>
                                        <b>Avatu </b>is sanskrit word meaning "protect" but for us
                                        it means "TRUST" you can put in us for honest, transparent
                                        and for-ever relationship which goes beyond the contract.
                                        For us your success is of utmost value and aligning our
                                        goals with your goals for best outcome. Our philosophy is
                                        "we will go to ends of the world to help our customers".<br />
                                        <br />

                                        <b>Our Values</b><br /><br />

                                        <b>Truth and Ethics </b>- Truthful and uphold the values.<br /><br />

                                        <b>Honesty and Transparency</b> - communicate openly in a transparent manner.
                                        We thrive only if our customers are successful and thriving.
                                        <br /><br />

                                        <b>Perseverance</b> - Foster commitment, Achieve your goals with
                                        persistence and overcome obstacles.<br /><br />

                                        <b>Equality</b> - Respect and value every individual.
                                        We strive to be one of the "Best places to Work for".
                                    </p>
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col lg={4}>
                                    <img className="wwa-man" alt="Man 1" src="/assets/man 1.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <ReactBootStrap.Container>
                                <div className="wwd-heading">
                                    <h1>What we do</h1>
                                </div>
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col md={6}>
                                        <ul className="wwd-list-group">
                                            <li>Product Evaluation and Assesment</li>
                                            <li>Consulting-ITIL</li>
                                            <li>Project Management</li>
                                            <li>End-to-End Encryption</li>
                                            <li>Managed Services</li>
                                            <li>Upgrades and Maintainance</li>
                                        </ul>
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col md={6}>
                                        <ul className="wwd-list-group">
                                            <li>Staff Augmentation Services</li>
                                            <li>Digital Marketing and UI/UX Design</li>
                                            <li>Application Development</li>
                                            <li>Performance Testing</li>
                                            <li>Identity Management and Sec-Ops</li>
                                            <li>Recruitment Services</li>
                                        </ul>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Container>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </div>
        </section>
    )
}
export default About