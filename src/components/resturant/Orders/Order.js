import React, { useEffect, useState } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
const API_HOST = "http://localhost:3000";
const INVENTORY_API_URL = `${API_HOST}/MOCKDATA`;
function Order(props) {
  // const [data, setData] = useState([]);
  // let data= props.orders.list;
  // console.log(data);
  // const fetchInventory = () => {
  //   fetch(`${INVENTORY_API_URL}`)
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  //     // console.log(data);
  // };
  // useEffect(() => {
  //   fetchInventory();
  // }, []);

  // console.log(data.data +"  dfghjklkjhgfdfghjk");
  const data = props.orders.list;
  console.log(data+ " dfghjkl");
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Table</th>
            <th>Order</th>
            <th>status</th>
            <th>Data</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.table}</td>
              <td>{item.order}</td>
              <td>{item.status}</td>
              <td>{item.data}</td>
              <td>
                    <React.Fragment>
                        <button
                        className={"btn-success"}>
                            Save
                        </button>   
                        <button
                         className={"btn-secondary"}
                         style={{marginLeft: 8}}>Cancel</button>
                             </React.Fragment>
                        
                             <button
                                 className={"btn-primary"}
                               
                             >
                                 Editd
                             </button>
                         
                                
                            </td>
            
            
           
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default inject("orders")(observer(Order));
// key={item.id}