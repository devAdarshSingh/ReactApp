import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css';

const ServicecardBmc = () => {

    useEffect(() => {
        AOS.init({})
    }, [])

    const [Cardstyle, setStyle] = useState({
        width: "100%",
        height: 'fit-content',
        marginBottom: 20,
        marginTop: 20,
        borderTopLeftRadius: 75,
        borderTopRightRadius: 75,
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 0,
        padding: '15px 35px',
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: '3px 3px 15px #B1B1B1',
        letterSpacing: 2,
    })

    return (
        <ReactBootStrap.Container style={{
            marginTop:30,
            marginBottom:30,
        }} >
            <ReactBootStrap.Row style={{
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <ReactBootStrap.Col md={6}>
                    <div data-aos="fade-up" >
                        <ReactBootStrap.Card style={Cardstyle} className="service-logo-card">
                            <img class="service-icon-logo" style={{ width: 195 }} alt="BMC logo" src="/assets/bmc 1.png" />
                            <h4>BMC Remedyforce</h4>
                            <ReactBootStrap.Button style={{
                                borderRadius: 20,
                                padding: '.6rem 1.6rem',
                                border: '2px solid #fff',
                                backgroundColor: '#2E4DA1',
                            }}>
                                Read More
                            </ReactBootStrap.Button>
                        </ReactBootStrap.Card>
                    </div>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md={6}>
                    <div data-aos="fade-up" >
                        <ReactBootStrap.Card style={Cardstyle} className="service-logo-card">
                            <img class="service-icon-logo" style={{ width: 195 }} alt="BMC logo" src="/assets/servicesnow 1.png" />
                            <h4>Service Now</h4>
                            <ReactBootStrap.Button style={{
                                borderRadius: 20,
                                padding: '.6rem 1.6rem',
                                border: '2px solid #fff',
                                backgroundColor: '#2E4DA1',
                            }}>
                                Read More
                            </ReactBootStrap.Button>
                        </ReactBootStrap.Card>
                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    )

}
export default ServicecardBmc;
