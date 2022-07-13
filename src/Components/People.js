import React, {Component} from 'react';

export default class People extends Component{

    render(){
        return (
            <table style={{width: '90%'}} className='addressContainer'>
                <thead style={{border: '1px solid black'}}>
                    <tr style={{border: '1px solid black'}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>+ 385 1111111</td>
                        <td>Random address</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}
