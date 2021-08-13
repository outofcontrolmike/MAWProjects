
//functional component
const TableHeader = () => {
return(
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Delete</th>
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
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody> 
}

//Class Component - includes functional components
//Can only return one parent element - (Most of the time we would use a div)


const Table = (props) =>  {  
        //do something with characterInfo prop
        const {characterInfo, removeCharacter} = props;
        
        return(
            <table>
                <TableHeader />
                <TableBody characterInfo={characterInfo} removeCharacter={removeCharacter}/>
            </table>
        )
    }

export default Table