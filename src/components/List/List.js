import React from 'react'
import { ResponseHandler } from '../../Helper'
import { API_URL } from '../../Config'

class List extends React.Component {
    constructor(){
        super();
        this.state ={
            loading: false,
            currencies: [],
            error: null
        }
    }

    componentDidMount(){ 
        this.setState({loading:false})
        fetch(API_URL + '/cryptocurrencies?page=1&perPage=20')
            .then(ResponseHandler)
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading: false
                })
                
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage
                })
                
            });
    }
    render(){
        console.log(this.state)

        if(this.state.loading){
            return <div>Loading....</div>
        }
        return(
            <div>
                <h1>content</h1>
            </div>

        );
    }
}

export default List