import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';
import { ProgressBar } from 'react-loader-spinner';

const Hospital = () => {
    const [data, setData] = useState([]);
    const [temp,setTemp] = useState(false);
    //find donar records
    const getDonars = async () => {
      try {
        const { data } = await API.get("/inventory/get-hospitals");
          console.log(data);
        if (data?.success) {
          setData(data?.hospitals);
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
            <table className="table m-3 border-primary">
            <thead>
              <tr className='table-active'>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.hospitalName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.address}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </Layout>
  )
}

export default Hospital