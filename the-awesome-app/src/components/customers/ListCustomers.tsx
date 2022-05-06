import axios from "axios";
import React, { useEffect, useState } from "react";
import { Customer } from "../../models/Customer";
import EditCustomer from "./EditCustomer";
import './ListCustomers.css'

interface ListCustomersProps {}

const ListCustomers = (props: ListCustomersProps) => {
  
  const [customers, setCustomers] = useState<Array<Customer>>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null) ;

  useEffect(() => {

    
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    //async and await
    try {
      const url = process.env.REACT_APP_CUSTOMERS_URL;
      if (url) {
        const response = await axios.get(url);
        const data = response.data;
        console.log("data", data);
        setCustomers(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  async function deleteCustomer(customer: Customer, index: number) {
    try {
      let url = process.env.REACT_APP_CUSTOMERS_URL;
      if (url) {
        url = url + "/" + customer.id;

        const response = await axios.delete(url);
        alert("Deleted the record");
        const copy_of_customers = [...customers];
        copy_of_customers.splice(index, 1);
        setCustomers(copy_of_customers);
        
      }
    } catch (error) {
      alert("Delete Error");
    }
  }

  function editCustomer(customer: Customer, index: number){

    setSelectedCustomer(customer);
  }
  function editCancel(message: string){
    setSelectedCustomer(null);
  };

  async function editUpdate(updatedCustomer: Customer){
    try {
        let url = process.env.REACT_APP_CUSTOMERS_URL;
        if(url){
            //url = url + "/" + updatedCustomer.id;
      const response = await axios.put(url, updatedCustomer);
      alert("updated the record");
      fetchCustomers();
      setSelectedCustomer(null);
      
    }
      else{
        alert("update record failed")
      }

    } catch (error) {
      alert("update record error")
    }
  };

  function renderCustomers() {
    return customers.map((item, index) => {
      return (
        <div className="customer" key={item.id}>
          <p>Id: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Loction: {item.location}</p>

          <div>
            <button className="btn btn-danger"
              onClick={() => {
                deleteCustomer(item, index);
              }}
            >
              Delete
            </button>{" "}
            &nbsp;
            <button className="btn btn-warning"
              onClick={() => {
                editCustomer(item, index);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Customers</h3>
      <div style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}>
          {renderCustomers()}
      </div>

      <div>
          {selectedCustomer ? (
            <EditCustomer
              
              key={selectedCustomer.id}
              customer={selectedCustomer}
              onCancel={editCancel}
              onSave={editUpdate}
            />
          ) : null}
        </div>
    </div>
  );
};


export default ListCustomers;