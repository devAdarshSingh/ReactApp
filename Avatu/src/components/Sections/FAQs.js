import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import FAQsData from '../dataset/FAQs.data';
import Myform from "./MessageForm";

class FAQs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FAQsList: FAQsData,
        }
    }
    render() {
        return (
            <section id="FAQs" style={{ marginBottom: 150 }}>
                <ReactBootStrap.Container className="s-container">
                    <div style={{ padding: 50 }} className="s-header">
                        <h2>Frequently asked questions</h2>
                        <hr className="underline" />
                    </div>
                    <ReactBootStrap.Row style={{justifyContent:'space-between'}} className="service-box">
                        <ReactBootStrap.Col md={6}>
                            <div className="FAQs-container">
                                <ReactBootStrap.Accordion style={{
                                    border: 'none'
                                }} defaultActiveKey={2}>
                                    {this.state.FAQsList.map((item, index) => {
                                        return (
                                            <ReactBootStrap.Card style={{
                                                border: 'none',
                                            }} >
                                                <div style={{
                                                    backgroundColor: '#516A93',
                                                    borderRadius: 5,
                                                    margin: 4,
                                                    zIndex: 2,
                                                }}>
                                                    <ReactBootStrap.Accordion.Toggle
                                                        style={{
                                                            color: '#fff',
                                                            fontSize: 18,
                                                        }}
                                                        as={ReactBootStrap.Card.Header} eventKey={index}>
                                                        {item.question}
                                                    </ReactBootStrap.Accordion.Toggle>
                                                </div>
                                                <div style={{
                                                    color:'#8d97ad',
                                                    zIndex: 1,
                                                    backgroundColor: '#fff',
                                                    margin: 4,
                                                    marginTop: -7,
                                                    borderBottomLeftRadius: 10,
                                                    borderBottomRightRadius: 10
                                                }}>
                                                    <ReactBootStrap.Accordion.Collapse eventKey={index}>
                                                        <ReactBootStrap.Card.Body
                                                            bg="danger"
                                                        ><p>{item.answer}</p>                                                            <strong>Asked by : </strong><p style={{
                                                                color: 'rgb(252, 165, 165)'
                                                            }}><i>{item.askedby}</i> {item.date}</p>
                                                        </ReactBootStrap.Card.Body>
                                                    </ReactBootStrap.Accordion.Collapse>
                                                </div>
                                            </ReactBootStrap.Card>
                                        )
                                    })}
                                </ReactBootStrap.Accordion>
                            </div>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={5}>

                            <Myform
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
export default FAQs