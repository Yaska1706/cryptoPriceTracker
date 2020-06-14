import React from 'react'
import { ResponseHandler } from '../../Helper'
import { API_URL } from '../../Config'
import Loading from '../common/Loading'
import Table from './Table'

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
    changePercent(percent){
        if(percent>0){
        return <span className="percent-raised">{percent}% &uarr;</span>
        }
        else if(percent<0){
        return <span className="percent-fallen">{percent}% &darr;</span>
        }
        else{
        return <span>{percent}</span>
        }


    }
    render(){
        const {loading,error,currencies} = this.state;
      

        if(loading){
            return <div className="loading-container"><Loading/></div>
        }
        if (error){
        return <div className="error">{this.state.error}</div>
        }
        return(
            <Table 
            currencies = {currencies}
            changePercent = {this.changePercent}
            />
        );
    }
}

export default List