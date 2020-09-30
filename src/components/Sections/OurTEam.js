import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as ReactBootStrap from 'react-bootstrap';


const OurTeam = () => {
    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div class="py-5 team3 bg-light">
            <div class="container">
                <div class="row justify-content-center mb-4">
                    <div class="col-md-7 text-center">
                        <h3 class="mb-3">Experienced & Professional Team</h3>
                        <h6 class="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                    </div>
                </div>
                <div class="row">


                    <div class="row">
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col className="team-single-container" data-aos="fade-up" style={{textAlign:'center'}} md={4}>
                            <ReactBootStrap.Col style={{alignItems:'center'}}>
                                <ReactBootStrap.Image style={{width:'20vh',height:'20vh',border:'2px solid #eee'}} src="/assets/career 1.png" roundedCircle />
                            </ReactBootStrap.Col>

                            <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                            <h6 class="subtitle">Property Specialist</h6>
                            <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                        </ReactBootStrap.Col>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default OurTeam