import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';


class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: null,
            email: '',
            question: '',
            btnbg: this.props.btnBg,
            faq_q: [],
            showAlert: false,
            mystyle: {
                backgroundColor: this.props.bg,
                color: this.props.text,
                borderRadius: this.props.radius,
                height: this.props.height,
                border: '2px solid #fff',
            }
        }

    }
    onTextChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit = () => {
        try {
            this.setState({
                faq_q: {
                    name: this.state.name,
                    number: this.state.number,
                    email: this.state.email,
                    question: this.state.question,
                    date: Date(),
                }
            })
            this.setState({
                showAlert: true,
            })
        } catch (Err) {
            console.log(Err);
        }
    }

    render() {
        return (
            <ReactBootStrap.Container>
                <div style={{
                    padding: 25,
                }}>
                    <h2>Want to join our team?</h2    >
                    <p style={{ color: '#a8a8a8' }}>Post request we will reach you shortly</p>
                    <ReactBootStrap.Row>
                        <div style={{
                            marginTop: 15,
                        }}>

                            {this.state.showAlert &&
                                <ReactBootStrap.Alert variant="info" onClose={() => this.setState({ showAlert: false })} dismissible>
                                
                                        Request sent we will reach you shortly
                                    
                                </ReactBootStrap.Alert>
                            }

                            <ReactBootStrap.Form onSubmit={() => this.onSubmit()}>
                                <ReactBootStrap.Form.Row>
                                    <ReactBootStrap.Form.Group as={ReactBootStrap.Col}>
                                        <ReactBootStrap.Form.Control value={this.state.name} name="name" onChange={evt => this.onTextChange(evt)} className="myClass" style={this.state.mystyle} type="text" placeholder="Your name here" required />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group as={ReactBootStrap.Col}>
                                        <ReactBootStrap.Form.Control pattern="[0-9]{10}" value={this.state.number} type="tel" name="number" style={this.state.mystyle} placeholder="Your number here" required />
                                    </ReactBootStrap.Form.Group>
                                </ReactBootStrap.Form.Row>

                                <ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Control vlaue={this.state.email} name="email" style={this.state.mystyle} type="email" placeholder="example@example.com" required />
                                </ReactBootStrap.Form.Group>

                                <ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Control vlaue={this.state.question} name="question" style={this.state.mystyle} placeholder="Your question here" required />
                                </ReactBootStrap.Form.Group>

                                <ReactBootStrap.Button style={{
                                    borderRadius: this.state.mystyle.borderRadius,
                                    padding: '.6rem 1.6rem',
                                    border: this.state.mystyle.border,
                                    backgroundColor: this.state.btnbg,
                                }} variant="primary" type="submit"
                                    onMouseEnter={() => { this.setState({ btnbg: '#FEB1B1' }) }}
                                    onMouseLeave={() => { this.setState({ btnbg: this.props.btnBg }) }}
                                >
                                    Submit
                            </ReactBootStrap.Button>
                            </ReactBootStrap.Form>
                        </div>
                    </ReactBootStrap.Row>
                </div>
            </ReactBootStrap.Container>
        )
    }
}
export default JobForm
