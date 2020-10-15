import React, { Fragment } from 'react';
import { Container, Row, Col, Media,  Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profilePic from '../img/profile.jpg'


export default class FetchData extends React.Component {

    state = {
        loading: true,
        name: null,
        phone: null,
        email: null,
        bio: null,
        profile_picture: null,
        album: null,
        
    }
   

    async componentDidMount() {
        // const url = "http://localhost:3000/landscapes.json";
        const url = "https://kharrison34.github.io/livejson/landscapes.json";

        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            name: data.name, 
            phone: data.phone,
            email: data.email, 
            bio: data.bio, 
            profile_picture: data.profile_picture,
            album: [ ...data.album],
           
            loading: false
            });
        console.log( data.album[1]);
    }

    
    
    render() {

        console.log(this.state);

        // if (this.state.loading) {
        //     return <div>loading...</div>
        // } else
        return (
           <Container>
               <div>
                    <Row>
                        <Col> 
                            <Media className="my-3 p-3 mt-5 media-div" >
                            <img className="Rounded proImg" src={profilePic} alt="profile picture" />
                                <Media heading className="p-3 medHead">
                                    <h1>
                                    {this.state.name}
                                    </h1>
                                
                                    <p className="bio">Bio</p>
                             
                                    <p>
                                    {this.state.bio}

                                    </p>
                                </Media>
                                <Media body className="">
                                    <div className="medBody">
                                        <h3>Phone</h3>
                                        <p>{this.state.phone}</p> 
                                        <h3>Email</h3>
                                        <p> {this.state.email}</p>   


                                    </div>
                                
                                </Media>
                            </Media>
                             

                            {/* {this.state.profile_picture} */}
                           
                      
                        </Col>
                    </Row>
                    {/* //cards */}
                    <Row>
                        {this.state.loading ? null
                        : 
                            <Fragment>
                                {this.state.album.map(single_album => (
                                    <Col xs="6" sm="4">
                                        <Card className="mb-3">
                                            <div className="card-container">
                                             
                                              <CardImg top width="100%" src={require(`../${single_album.img}`) } alt="my photos" />
                                              <h2 className="title">{single_album.title}</h2>
                                            </div>
                                            <CardBody>
                                                <div className="card-p">
                                                 <p>{single_album.description}</p>
                                                 <p className="p-right">{single_album.date}</p>

                                                </div>
                                               
                                            </CardBody>



                                        </Card>
                                    </Col>
                                ))}
                            </Fragment>
                        }
                       
                       
                    </Row>
                 

               </div>
             
         
           </Container>
        
            
         
        )
    
    }
}