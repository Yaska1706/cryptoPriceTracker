import React from 'react'
import { ResponseHandler } from '../../Helper'
import { API_URL } from '../../Config'
import './Table.css'
import Loading from '../common/Loading'

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
      

        if(this.state.loading){
            return <div className="loading-container"><Loading/></div>
        }
        if (this.state.error){
        return <div className="error">{this.state.error}</div>
        }
        return(
            
            <div className="Table-container">
                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>cryptocurrencies</th>
                            <th>Price</th>
                            <th>Market</th>
                            <th>24hr change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                    {this.state.currencies.map((currency) => (
                        <tr key = {currency.id }>
                            <td>
                    <span className="Table-rank">{currency.rank}</span>
                        {currency.name}
                            </td>
                            <td>
                    <span className="Table-dollar">$ {currency.price}</span>
                            </td>
                            <td>
                    <span className="Table-dollar">$ {currency.marketCap}</span>
                            </td>   
                            <td>
                                {this.changePercent(currency.percentChange24h)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

        );
    }
}

export default List