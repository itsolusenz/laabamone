
import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
//import Cities from "./cities";

export default function DemoContent(){
 
    const columns = [
      {
        name: "Order no.",
        options: {
          filter: false
        }
      },
      {
        name: "Customer",
        options: {
          filter: true
        }
      },
    
      {
        name: "Payment ID",
        options: {
          filter: false
        }
      },
      {
        name: "Status",
        options: {
          filter: false
        }
      },
      {
        name: "Date",
        options: {
          filter: false
        }
      },
      {
        name: "Amount",
        options: {
          filter: false
        }
      },
    
    ];

    const data = [
      ["#12345", "Kimberly Ang", "Package A","In Progress", '12/02/2021',"$230.00"],
      ["#12367", "Ong Kim Huat","Package B", "New Order", '12/02/2021',"$230.00"],
      
    ];

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"History"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  
}


