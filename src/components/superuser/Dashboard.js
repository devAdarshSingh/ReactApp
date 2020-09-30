import React from 'react';
import '../../App.css';
import 'aos/dist/aos.css';
import * as firebase from 'firebase';
// import Sidebar from './Sidebar'
import * as ReactBootStrap from 'react-bootstrap';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            FAQ: true,
            career: true,
            blogs: true,
            gallery: true,
            news: true,
        })
    }

    render() {
        return (
            <>
                <ReactBootStrap.Col className="sidebar" md={3} xl={2} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#00bbff',
                    position: 'absolute',
                    top: 80,
                    bottom: 0,
                    left: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    color:'#fff',
                }}>

                    <h2>Dashboard</h2>
                    <hr />
                    <div className="sidebar-links" style={{
                        flexDirection: 'column',
                    }}  >
                        <ul>
                            <li><p>title</p></li>
                            <li><p>title</p></li>
                            <li><p>title</p></li>
                            <li><p>title</p></li>
            
                        </ul>
                    </div>
            </ReactBootStrap.Col>
            </>
        )
    }
}


export default Dashboard;


/* <button onClick={() => {
                    firebase.auth().signOut().then(() => {
                        console.log("Logged Out")
                    })
                }}>Logout</button> */