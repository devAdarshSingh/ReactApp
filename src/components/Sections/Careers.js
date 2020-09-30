import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import FAQsData from '../dataset/FAQs.data';
import JobForm from "./JobForm";

class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FAQsList: FAQsData,
        }
    }
    render() {
        return (
            <section id="career" style={{ marginBottom: 150 }}>
                <ReactBootStrap.Container className="s-container">
                    <div style={{ padding: 50 }} className="s-header">
                        <h2>Join our team</h2>
                        <hr className="underline" />
                    </div>
                    <ReactBootStrap.Row style={{ justifyContent: 'space-between' }} className="service-box">
                        <ReactBootStrap.Col md={6}>
                            <div className="career-container">
                                <img src="/assets/career 1.png" style={{width: '100%'}} alt="career-img" />
                            </div>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={5}>

                            <JobForm
                                bg="#E6E7E7"
                                text="#808080"
                                radius={20}
                                height="3.2rem"
                                btnBg="#516A93"
                            />

                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </section>
        )
    }
}
export default Careers