import React from 'react'
import './Table.css'

const Table = (props) => {
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
                    {props.currencies.map((currency) => (
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
                                {props.changePercent(currency.percentChange24h)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
    )
}

export default Table