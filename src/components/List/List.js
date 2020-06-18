import React from 'react'
import { ResponseHandler } from '../../Helper'
import { API_URL } from '../../Config'
import Loading from '../common/Loading'
import Table from './Table'
import Pagination from './Pagination'

class List extends React.Component {
    constructor(){
        super();
        this.state ={
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            pages: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){ 
        this.currencyfetch();
        
    }
    currencyfetch(){
        this.setState({loading:false})
        const { pages } = this.state;
        fetch(API_URL + `/cryptocurrencies?page=${pages}&perPage=10`)
            .then(ResponseHandler)
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    totalPages: data.totalPages,
                    loading: false
                })
                
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage
                })
                
            });
        
    }
   
    handleClick(direction){
        let nextpage = this.state.pages;

        nextpage = direction === 'next' ? nextpage + 1 : nextpage - 1;

        this.setState({pages: nextpage}, () =>{
            console.log(this.state.pages)
            this.currencyfetch();
        });
        


    }

   
    render(){
        const {loading,error,currencies,pages,totalPages} = this.state;
      

        if(loading){
            return <div className="loading-container"><Loading/></div>
        }
        if (error){
        return <div className="error">{this.state.error}</div>
        }
        return(
            <div>
                <Table 
                    currencies = {currencies}
                    
                />

                <Pagination 
                pages={pages}
                totalPages={totalPages}
                handleClick = {this.handleClick}
                />

            </div>
            
        );
    }
}

export default List