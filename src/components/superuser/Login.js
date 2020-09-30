import React from 'react';
import '../../App.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'aos/dist/aos.css';
import * as firebase from 'firebase';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: '',
            islogin: false,
            error: ''
        })
    }
    render() {
        // login function 
        const login = (event, email, password) => {
            event.preventDefault();
            const emailId = email.replace(/\s+/g, '')
            const pass = password.replace(/\s+/g, '')

            console.log(emailId+""+pass)
            this.setState({
                islogin: true
            })
            try {
                firebase.auth().signInWithEmailAndPassword(emailId, pass).then((res) => {
                    console.log(res)
                    this.setState({
                        isLoggedin: true,
                        islogin: false,
                    })
                }).catch(err => {
                    this.setState({
                        islogin: false,
                        error: 'Email and Password do not match'
                    })

                })
            } 
            catch (err) {
                console.log("Login failed" + err)
                this.setState({
                    islogin: false
                })
                alert(err)
            }
        }
        onchange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
        return (
            <div className="admin-bg">
                <ReactBootStrap.Container >
                    <ReactBootStrap.Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25, }}>
                        <ReactBootStrap.Col md={4} className="login-box">
                            <ReactBootStrap.Form onSubmit={(e) => login(e,this.state.email, this.state.password)}  >
                                <ReactBootStrap.Form.Group controlId="formBasicEmail">
                                    <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                                    <ReactBootStrap.Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={(e) => onchange(e)}
                                        required
                                    />
                                </ReactBootStrap.Form.Group>

                                <ReactBootStrap.Form.Group controlId="formBasicPassword">
                                    <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                                    <ReactBootStrap.Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={(e) => onchange(e)}
                                        required
                                    />
                                </ReactBootStrap.Form.Group>
                                {this.state.error !== "" && (
                                    <p style={{color:'tomato'}}>{this.state.error}</p>
                                )}
                                {this.state.islogin ? (
                                    <ReactBootStrap.Button variant="success" type="submit">
                                        <ReactBootStrap.Spinner animation="border" variant="light" />
                                    </ReactBootStrap.Button>
                                ) :
                                    (
                                        <ReactBootStrap.Button variant="success" type="submit">
                                            Submit
                                        </ReactBootStrap.Button>
                                    )
                                }
                            </ReactBootStrap.Form>

                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </div>
        )
    }
}


export default Login;
