import Axios from 'axios';
import AppointmentListRow from './AppoinmentListRow';
import { useEffect, useState } from 'react';

function AppointmentList(){

    const[arr,setArr]=useState([])
    useEffect(()=>{
        Axios.get("https://wellnesswise-backend.onrender.com/doctorRoute")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>{alert(err);})
    },[])

    const listItems=()=>{
        return arr.map((val)=>{
            return < AppointmentListRow obj={val}/>
        })
    }

    return(
        <table class="table table-bordered table-striped " >
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Appoinment Date</th>
                    <th class="text-center">Appoinment Type</th>
                </tr>
            </thead>
            <tbody>
                {listItems()}
            </tbody>
        </table>
    )
}
export default AppointmentList;