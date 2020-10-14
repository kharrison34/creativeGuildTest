import React from 'react'

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
             profile_picture: 
             data.profile_picture});
        // console.log(data.name, data.phone, data.email, data.bio, data.profile_picture);
    }


    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        } else
        return (
           
        
            <div>
                {this.state.name}
            </div>
         
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