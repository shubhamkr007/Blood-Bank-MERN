import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import { useSelector } from "react-redux";
import { ProgressBar } from "react-loader-spinner";

const Consumer = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    const [temp,setTemp] =useState(false);
    //find donar records
    const getDonars = async () => {
      try {
        const { data } = await API.post("/inventory/get-inventory-hospital", {
          filters: {
            inventoryType: "out",
            hospital: user?._id,
          },
        });
        if (data?.success) {
          setData(data?.inventory);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }finally{
        setTemp(false);
      }
    };
  
    useEffect(() => {
        setTemp(true);
      getDonars();
    }, []);
  
    return (
      <Layout>
        {temp ? (
        <div className="d-flex justify-content-center align-items-center">
          <ProgressBar
            visible={true}
            height="200"
            width="200"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="container mt-4">
          <table className="table table-danger">
            <thead className="table-active">
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory TYpe</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity}</td>
                  <td>{record.email}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </Layout>
    );
};

export default Consumer;
