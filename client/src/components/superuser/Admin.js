import React from 'react';
import '../../App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import * as firebase from 'firebase';
import * as ReactBootStrap from 'react-bootstrap'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            userid: '',
            password: '',
            isLoggedin: false,
            check: true,
        })
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    isLoggedin: true,
                    check: false
                })
            } else {
                this.setState({
                    isLoggedin: false
                })
            }
        })
    }

    render() {
        if (this.state.check) {
            return (
                <div style={{
                    padding: 50,
                    textAlign: 'center'
                    
                }}>
                    <ReactBootStrap.Spinner animation="grow" variant="info" />
                    <h6>Please wait ...</h6>
                </div>
            )
        } else {
            if (this.state.isLoggedin) {
                return (
                    <Dashboard />
                )
            } else {
                return (
                    <Login />
                )
            }
        }
    }
}


export default Admin;
