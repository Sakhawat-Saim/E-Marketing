import { Button } from "@material-ui/core";
import React, { useState } from "react";
import BookingList from "../Customer/BookingList/BookingList";
import AddService from "./AddService/AddService";
import "./Admin.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageService from "./ManageService/ManageService";
import OrderList from "./OrderList/OrderList";
const Admin = () => {
  const [switchState, setSwitchState] = useState({
    orderList: false,
    addService: true,
    makeAdmin: false,
    manageService: false,
  });

//   const ButtonStyle = {
//       textAlign: 'center'
//   };
  const switchWorkplace = (props) => {
      // console.log(props);
      if(props === "orderList"){
          setSwitchState({
            orderList: true,
            addService: false,
            makeAdmin: false,
            manageService: false,
          })
      }else if(props === "addService"){
        setSwitchState({
          orderList: false,
          addService: true,
          makeAdmin: false,
          manageService: false,
        })
    }else if(props === "makeAdmin"){
        setSwitchState({
          orderList: false,
          addService: false,
          makeAdmin: true,
          manageService: false,
        })
    }else if(props === "manageService"){
        setSwitchState({
          orderList: false,
          addService: false,
          makeAdmin: false,
          manageService: true,
        })
    }else{
        console.log("error!")
    }

  };
  const {orderList, addService, makeAdmin, manageService} = switchState;
  return (
    <div id="adminSuperDiv">
      <div id="nestedDiv">
        <div style={{ width: "90%"}}>
          <Button onClick={()=>switchWorkplace("orderList")}>
            Order list
          </Button>
        </div>
        <div style={{ width: "90%"}}>
          <Button onClick={()=>switchWorkplace("addService")}>
            Add Service
          </Button>
        </div>
        <div style={{ width: "90%"}}>
          <Button onClick={()=>switchWorkplace("makeAdmin")}>
            Make Admin
          </Button>
        </div>
        <div style={{ width: "90%"}}>
          <Button onClick={()=>switchWorkplace("manageService")}>
            Manage Services
          </Button>
        </div>
      </div>
      <div id="workplace">
        {orderList && <BookingList />}
        {addService && <AddService />}
        {makeAdmin && <MakeAdmin />}
        {manageService && <ManageService />}
      </div>
    </div>
  );
};

export default Admin;
