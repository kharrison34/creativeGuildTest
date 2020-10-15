import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profilePic from '../components/profile.jpeg'


export default class FetchData extends React.Component {

    state = {
        loading: true,
        name: null,
        phone: null,
        email: null,
        bio: null,
        profile_picture: null,
      
    }


    async componentDidMount() {
        const url = "http://localhost:3000/landscapes.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            name: data.name, 
            phone: data.phone,
            email: data.email, 
            bio: data.bio, 
            profile_picture: data.profile_picture,

            loading: false
            });
        // console.log(data.name, data.phone, data.email, data.bio, data.profile_picture);
    }


    render() {

        // if (this.state.loading) {
        //     return <div>loading...</div>
        // } else
        return (
           <Container>
               <div>
                    <Row>
                        <Col> 
                        <Media className="my-3 p-3" >
                         <img className="Rounded proImg" src={profilePic} />
                            <Media heading className="p-3 medHead">
                                <h1>
                                 {this.state.name}
                                </h1>
                                <p>
                                 {this.state.bio}

                                </p>
                            </Media>
                            <Media body className="medBody">
                                <h3>Phone</h3>
                               <p>{this.state.phone}</p> 
                                <h3>Email</h3>
                                 <p> {this.state.email}</p>   

                            </Media>
                        </Media>
                             

                            {/* {this.state.profile_picture} */}
                           
                      
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                        <Col sm="4">.col-sm-4</Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                        <Col sm="4">.col-sm-4</Col>
                    </Row>

               </div>
             
         
           </Container>
        
            
         
        )
    
    }
}



// import React from 'react'

// export default class FetchData extends React.Component {

//     state = {
//         loading: true,
      
//     }


//     async componentDidMount() {
//         const url = "http://localhost:3000/landscapes.json";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({person: data.results})
//         console.log(data);
//     }


//     render() {
//         return (
//             <div>
//             {this.state.loading || !this.state.person ? (
//                 <div>loading...</div>
//             )  : (
//             <div>person..</div>)}
//         </div>
//         )
    
//     }
// }