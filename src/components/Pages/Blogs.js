import React from 'react';
import '../../App.css';
import * as ReactBootStrap from 'react-bootstrap';
import Footer from '../layout/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from '../dataset/Blogs'



class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            // blog_title: '',
            // blog_desc: '',
            // blog_img: '',
            // blog: [],
        })
    }

    componentDidMount() {
        AOS.init({})
        // this.setState({
        //     blog: this.state.blog.push(Blog)
        // })
        // console.log(this.state.blog)
    }

    render() {
        const blogs = Blog.map((item, index) => {
            return (
                <ReactBootStrap.Col onClick={() => alert(index)} key={index} className="team-single-container" data-aos="fade-up" style={{
                    textAlign: 'center',
                    margin: 10,
                    border: '1px solid #eee'
                }} md={3}>
                    <ReactBootStrap.Col style={{ alignItems: 'center' }}>
                        <ReactBootStrap.Image src={item.image} fluid />
                    </ReactBootStrap.Col>
                    <h6 class="mt-4 font-weight-medium mb-0"><b>{item.title}</b></h6>
                    <p className="blog-texts">{item.description}</p>
                </ReactBootStrap.Col>
            )
        })

        return (
            <>
                <ReactBootStrap.Breadcrumb>
                    <ReactBootStrap.Breadcrumb.Item href="/">Home</ReactBootStrap.Breadcrumb.Item>
                    <ReactBootStrap.Breadcrumb.Item active>Blogs</ReactBootStrap.Breadcrumb.Item>
                </ReactBootStrap.Breadcrumb>
                <ReactBootStrap.Container >
                    <h1 style={{ color: '#008987' }}>Blogs</h1>
                    <p style={{ color: '#037BA1' }}>
                        Expert Perspective to keep you
                        updated on the Tech Trends.
                     </p>
                </ReactBootStrap.Container>

                <div class="py-5 team3">
                    <div class="container">
                        <div class="row">
                            {blogs}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Blogs;
