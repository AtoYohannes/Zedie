import React, { Component } from 'react'


class AddBooks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            description:'',
            book:''
         }
    }
    render() { 
        return ( 
            <div>
                <h1>
                    Add Books Here
                </h1>
            </div>
         );
    }
}
 
export default AddBooks;