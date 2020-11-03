import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';


const Header = () => {
  return (
    <ReactBootStrap.Jumbotron style={{
      backgroundColor: '#fff',
    }} fluid>
      <ReactBootStrap.Container style={{
        height: 'fit-content',
      }}>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col md={8} style={{
            alignSelf: 'center',
          }}>
            <div className="content-wrapper">
              <div className="content-heading">
                <h1 style={{
                  fontSize:'3.5vh'
                }} className="welcome-header">Align IT with Bussiness</h1>
              </div>
              <h4>Service Management</h4>
              <h4>Digital Transformation</h4>
              <h4>Workforce Enablement</h4>
            </div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col md={4}>
            <Spring
              from={{ opacity: 0, marginTop:-50 }}
              to={{ opacity: 1, marginTop:0  }}
              delay={1000}
            >
              {props => (
                <div style={props}>
                  <div className="image-wrapper mr-auto">
                    <img className="header-img" alt="laptop-bussiness-tool" src="/assets/LAPTOP.png" fluid />
                  </div>
                </div>
              )}
            </Spring>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container >
    </ReactBootStrap.Jumbotron >
  );
}
export default Header;