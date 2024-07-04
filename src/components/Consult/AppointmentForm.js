import { useEffect, useState } from "react";


function AppointmentForm(props)
{
    const[name ,setName]=useState(props.nameValue);
    const[email ,setEmail]=useState(props.emailValue);
    const[appoinmentdate ,setAppoinmentDate]=useState(props.appoinmentdateValue);
    const[appoinmenttime ,setAppoinmentTime]=useState(props.appoinmenttimeValue);


    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setAppoinmentDate(props.appoinmentdateValue);
        setAppoinmentTime(props.appoinmenttimeValue);
    },[props.nameValue,props.emailValue,props.appoinmentdateValue,props.appoinmenttimeValue]);

    const arr=[name,email,appoinmentdate,appoinmenttime];
    const handleclick = () => {
        props.getState(arr);
    }

    return(
        <div class="">
            <h4 class="head text-center">Fill the form and we will reach you soon</h4>
            <div style={{maxWidth:"50%", margin:"0px auto"}}>
                <label class="form-label label">Your Name</label>
                <input defaultValue={props.nameValue} class="form-control my-3 " onChange={(event)=> setName(event.target.value)} placeholder="Your Name "  required />

                <label class="form-label label">Your Email</label>
                <input defaultValue={props.emailValue}  class="form-control my-3 " onChange={(event)=> setEmail(event.target.value)} placeholder="Email " type="email" required />

                <label class="form-label label">Appoinment Date</label>
                <input defaultValue={props.appoinmentdateValue}  class="form-control my-3 " onChange={(event)=> setAppoinmentDate(event.target.value)} placeholder="Appoinment Date" type="date" required />

                <label class="form-label label">Appoinment Time</label>
                <input defaultValue={props.appoinmenttimeValue}  class="form-control my-3 " onChange={(event)=> setAppoinmentTime(event.target.value)} placeholder="Enter the Time " type="time" required />

                <button onClick={handleclick} class="btn btn-success d-block mx-auto my-3" type="submit" >Submit</button>
            </div>
        </div>
    )
}
export default AppointmentForm;