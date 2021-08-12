import React, {Component} from 'react'

//functional component
const TableHeader = () => {
return(
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>
)

}

//functional component
const TableBody = (props) => {
    const rows = props.characterInfo.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody> 
}

//Class Component - includes functional components
//Can only return one parent element - (Most of the time we would use a div)
class Table extends Component {
    render() {

        //do something with characterInfo prop
        const {characterInfo} = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody characterInfo={characterInfo}/>
            </table>
        )
    }
}

export default Table