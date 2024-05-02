// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";


class Hero extends Component{
    render(){
        return(
            <>
            <div className="name hero">
                Name: Abdus Samad
            </div>
            <div className=" hero">
                Email: samadabdus0007@gmail.com
            </div>
            <div className=" hero">
                Phone: 8887622884
            </div>
            <div className=" hero">
                Address: A Room
            </div>
            </>
        )
    }
}

export default Hero