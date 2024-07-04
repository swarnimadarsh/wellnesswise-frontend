import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  Axios  from "axios";
import AppointmentForm from "./AppointmentForm";


function EditAppoinment()
{
    const {id}=useParams();
    const [initialvalue,setInitialValue]=useState({name:"",email:"",appoinmentdate:"" ,appoinmenttime:""})
    const [newData, setNewData] = useState([]);

    
    useEffect(()=>{
        Axios.get("https://wellnesswise-backend.onrender.com/doctorRoute/update/" + id)
        .then((res)=>{
            if(res.status === 200){
                 const {name,email,appoinmentdate,appoinmenttime} = res.data;
                 setInitialValue({name,email,appoinmentdate,appoinmenttime});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {name:newData[0], email: newData[1], appoinmentdate: newData[2],appoinmenttime:newData[3] };
        Axios.put("https://wellnesswise-backend.onrender.com/doctorRoute/update/" + id , data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

    return(
        <form onSubmit={handleSubmit} >
            <AppointmentForm getState={getState}
                        nameValue={initialvalue.name}
                        emailValue={initialvalue.email}
                        appoinmentdateValue={initialvalue.appoinmentdate}
                        appoinmnettimeValue={initialvalue.appoinmenttime} />
        </form>
    )
}

export default EditAppoinment;