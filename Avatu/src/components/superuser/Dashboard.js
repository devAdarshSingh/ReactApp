import React from 'react';
import '../../App.css';
import 'aos/dist/aos.css';
import * as firebase from 'firebase';


class Dashboard extends React.Component {

    render() {
        return (
            <>
                <h1>Admin Dashboard</h1>
                <button onClick={() => {
                    firebase.auth().signOut().then(() => {
                        console.log("Logged Out")
                    })
                }}>Logout</button>
            </>
        )
    }
}


export default Dashboard;
