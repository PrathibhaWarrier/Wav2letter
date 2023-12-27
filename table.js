/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './barcodecss.css'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";


function Tables() {
//  const initialData=[{date:null,barcode_data:null, counter:null}]
 const [tbdata, setTbdata]=useState([]);
 const [err, seterr]=useState(0);
 const [isDone, setIsDone]=useState(false);
 const [loading, setLoading]=useState(false);

 

 useEffect(()=>{
  (console.log("HI"))
  //  fetchData();

        axios.get('http://127.0.0.1:8000/api/Capacity/')
        .then (response => {setTbdata(response.data);
          setLoading(false);
          setIsDone(true);
          
        console.log(response.data);})
    .catch(error=>{seterr(error);console.log(error); setLoading(false)})
    

 },[])
 
 
 

//  const fetchData=(evt)=>
//  {evt.preventDefault();
//    if(fromDate<=toDate)
//    {
//     axios.get(`http://127.0.0.1:8000/api/Capacity/`)
//     .then((response)=>{setTbdata(response.data);setIsDone(true);console.log(response)})
//     .catch(error=>{seterr(error);console.log(error)})
//    }
  
//  }

 const showData=()=>
 {
 const reqData=tbdata.map(row=>{
    return(
      <tr key={row.id} >
        
        <td>{row.id}</td>
        <td>{row.Plant}</td>
        <td>{row.Phase}</td>
      </tr>
       
    )});
    console.log(tbdata);

    return reqData;

 }

  return (
    <React.Fragment> 
   

      <div className="content">
        
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">CapacityPlanning</CardTitle>
              </CardHeader>
              <CardBody>

                
        
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      {/* <th>Numbe</th> */}
                      <th className="text-center">Id</th>
                      <th className="text-center">Plant</th>
                      <th className="text-center">Phase</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {console.log(isDone)}
                    {isDone?showData():null}
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
      </React.Fragment>
  );
}

export default Tables;
