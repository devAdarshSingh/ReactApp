import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import FAQsData from '../dataset/FAQs.data';
import MenuItems from '../dataset/MenuItems';
import MyForm from '../Sections/MessageForm';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FAQsList: FAQsData,
        }
    }
    render() {
        return (
            <section id="footer" >
                <ReactBootStrap.Container className="footer-container" fluid>
                    <ReactBootStrap.Row style={{ justifyContent: 'space-between', padding: 40, backgroundColor: 'rgba(47, 55, 120, 0.6)' }} >
                        <ReactBootStrap.Col style={{ color: '#fff', fontSize: 12, padding: 20 }} md={3}>
                            <h5>About Avatu</h5>
                            <p>
                                <b>Avatu </b>is sanskrit word meaning "protect" but for us
                                        it means "TRUST" you can put in us for honest, transparent
                                        and for-ever relationship which goes beyond the contract.
                                        For us your success is of utmost value and aligning our
                                        goals with your goals for best outcome. Our philosophy is
                                        "we will go to ends of the world to help our customers".<br />
                                <br />
                            </p>
                            <div style={{
                                textAlign: 'center',
                            }}>
                                <ReactBootStrap.Button style={{
                                    borderRadius: 25,
                                    padding: '.4rem 1.6rem',
                                    border: '2px solid #fff',
                                    backgroundColor: 'transparent',
                                }}>
                                    Download Brochure
                            </ReactBootStrap.Button>
                            </div>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col style={{
                            color: '#fff',
                            fontSize: 12,
                            padding: 20,
                            justifyContent: 'center',
                            textAlign: "center",
                        }} md={3}>
                            <h5>Quick Links</h5>
                            <p>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <ReactBootStrap.Nav.Link className="menuItem" href={item.url}>{item.title}</ReactBootStrap.Nav.Link>
                                    )
                                })}
                            </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col
                        style={{padding: 0}}
                            md={3}>
                                <MyForm
                                    heading='hidden'
                                    bg="#fff"
                                    text="#000"
                                    radius={20}
                                    height="3rem"
                                    btnBg="transparent"
                                />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={3}>

                            <div style={{
                                textAlign: 'center',
                                color: '#fff',
                                padding: 20,
                            }}>
                                <h6>FOLLOW US</h6>
                                <div className="social-link" style={{
                                    fontSize: 36,
                                }}>

                                    <p>
                                        <a href="https://www.facebook.com" aria-hidden><i class="fa fa-facebook-square social" aria-hidden="true" /></a>
                                    </p>
                                    <p>
                                        <a href="https://www.instagram.com" aria-hidden><i class="fa fa-instagram social" aria-hidden="true" /></a>
                                    </p>
                                    <p>
                                        <a href="https://www.twitter.com" aria-hidden><i class="fa fa-twitter-square social" aria-hidden="true" /></a>
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com" aria-hidden><i class="fa fa-linkedin-square social" aria-hidden="true" /></a>
                                    </p>

                                </div>
                            </div>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Row style={{color:'#fff',justifyContent:'center', width: '100%'}}>
                            copyright &#169; 2018 &nbsp;<strong>AVATU</strong>
                    </ReactBootStrap.Row>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </section>
        )
    }
}
export default Footer