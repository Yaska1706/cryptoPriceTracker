import React from 'react'
import { withRouter } from 'react-router-dom'
import './Table.css'

const Table = (props) => {
    const {currencies,changePercent,history} = props;
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
                    {currencies.map((currency) => (
                        <tr 
                        key = {currency.id }
                        onClick={() => history.push( `/currency/${currency.id}`)}
                        >
                            <td>
                    <span className="Table-rank">{currency.rank}</span>
                        {currency.name}
                            </td>
                            <td>
                    <span className="Table-dollar">$ </span>{currency.price}
                            </td>
                            <td>
                    <span className="Table-dollar">$ </span>{currency.marketCap}
                            </td>   
                            <td>
                                {changePercent(currency.percentChange24h)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
    )
}

export default withRouter(Table)