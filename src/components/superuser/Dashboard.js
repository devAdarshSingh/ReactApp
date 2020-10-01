import React from 'react';
import '../../App.css';
import 'aos/dist/aos.css';
import * as firebase from 'firebase';
// import Sidebar from './Sidebar'
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            FAQ: false,
            career: false,
            blogs: false,
            gallery: false,
            news: false,
            showSidebar: true,
        })
    }

    render() {
        return (
            <>
                {this.state.showSidebar ? (
                    <ReactBootStrap.Col className="sidebar" md={3} xl={2} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: 77,
                        bottom: 0,
                        left: 0,
                        color: '#fff',
                    }}>

                        <ReactBootStrap.Row style={{ backgroundColor: 'transparent', justifyContent: 'space-between', padding: 10 }}>
                            <div>
                                <h3>Dashboard</h3>
                            </div>
                            <div onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}>
                                <i style={{ fontSize: 24 }} class="fa fa-times" aria-hidden="true" />
                            </div>
                        </ReactBootStrap.Row>
                        <hr />
                        <div className="sidebar-links" style={{
                            flexDirection: 'column',
                            textAlign: 'left',
                            marginBottom: 10
                        }}  >
                            <ul>
                                <Link className="menuItem" to="/upload/blogs"><li className="sidebar-link">Blogs</li></Link>
                                <Link className="menuItem" to="/check/career"><li className="sidebar-link">Career</li></Link>
                                <Link className="menuItem" to="/update/blogs"><li className="sidebar-link">News</li></Link>
                                <Link className="menuItem" to="/gallery/add/blogs"><li className="sidebar-link">Events</li></Link>

                            </ul>
                        </div>
                    </ReactBootStrap.Col>
                ) : (
                        <ReactBootStrap.Col className="sidebar-collapse" xs={2} sm={1} md={1} xl={1} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            top: 77,
                            height: 'fit-content',
                            width: 'fit-content',
                            left: -20,
                            color: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div onClick={() => this.setState({ showSidebar: !this.state.showSidebar })} >
                                <i style={{ marginLeft: 20, fontSize: 24, padding: 5 }} class="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>

                        </ReactBootStrap.Col>

                    )}
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