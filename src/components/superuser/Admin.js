import React from 'react';
import '../../App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import * as firebase from 'firebase';


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            userid: '',
            password: '',
            isLoggedin: false,
        })
    }

    componentDidMount() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({
                        isLoggedin: true,
                    })
                } else {
                    this.setState({
                        isLoggedin:false
                    })
                }
            })
    }

    render() {
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


export default Admin;
