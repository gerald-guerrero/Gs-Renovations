import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { useLocation } from 'react-router-dom';
import './Layout.css'
import HomeImage from '../images/AdobeStock_267445856.jpeg';
import ServicesImage from '../images/AdobeStock_205125364.jpeg';
import ContactImage from '../images/pexels-vlada-karpovich-4050388.jpg'
import AboutImage from '../images/AdobeStock_127920403.jpeg'

function RouteDetails() {
    const location = useLocation();
    var bannerImage;
    if (location.pathname === '/') {
        bannerImage = HomeImage;
    } else if (location.pathname === '/services') {
        bannerImage = ServicesImage;
    } else if (location.pathname === '/contact') {
        bannerImage = ContactImage;
    } else {
        bannerImage = AboutImage;
    }
    return (<img src={bannerImage} alt="Banner" className="BannerImage" />);
  }
export class Layout extends Component {
  static displayName = Layout.name;

    render() {
    return (
      <div>
        <NavMenu />
        <RouteDetails />
        <Container>
          {this.props.children}
        </Container>
        <br></br>
      </div>
    );
  }
}
