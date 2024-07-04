import './style.css'
import psychiatrist from '../../Images/psychiatrist.png';
import mental_health from '../../Images/MentalHealth.png'
import { Link } from 'react-router-dom';
import health_concerns from '../../Images/healthconcern.png';
import role_model from '../../Images/rolemodel.png';
import AppointmentForm from "./AppointmentForm.js";
import { useState } from 'react';
import Axios from 'axios';
import counseling from '../../Images/counseling.png'

function Doctor() {
    const [arr, setArr] = useState([]);

    const handlesubmit = () => {
        alert("creating");
        const data = { name: arr[0], email: arr[1], appoinmentdate: arr[2], appoinmenttime: arr[3] };
        Axios.post("https://wellnesswise-backend.onrender.com/doctorRoute/create-appoinment", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("appoinment booked");
                    window.location.reload();
                }
                else {
                    alert("res.status:" + res.status);
                    Promise.reject();
                }
            })
            .catch((err) => console.log(err));
    }


    const getState = (out) => {
        setArr(out);
    }
    return (
        <div>
            <center>
                <br></br><br></br>
                <h1> Online Counseling with a Psychiatrist </h1>
                <br></br>
                <p>Get professional support and guidance from our licensed psychiatrists. Virtual sessions are available to address various mental health concerns.</p> <br></br>
                <img src={psychiatrist} alt='Psychiatrist'></img><br></br><br></br>
                <h2>No Concern Is Too Big or Small</h2>
                <br></br><br></br>
                <div className="appointment card col-4">
                    <h2 class="m-2">Book an Online Counseling Session</h2>
                    <form onSubmit={handlesubmit}>
                        <AppointmentForm getState={getState} />
                    </form>


                </div>
                <div class="head h3">
                    To view your appointment details <Link to="/appoinmentlist" class='nav-link ' >click Appoinment list</Link>
                </div>

                <div class="tips">
                    <div class="tip-card">
                        <img src={mental_health} alt="Mental Health" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Mental Health Promotion</h3><br></br>
                        <p>Our psychiatrists actively engage in mental health promotion activities within the school, organizing workshops, awareness campaigns, and providing resources to promote students' well-being.</p>
                    </div>
                    <div class="tip-card">
                        <img src={health_concerns} alt="Health Concerns" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Addressing Health Concerns</h3><br></br>
                        <p>Psychiatrists identify and address student mental health concerns, offering guidance on managing stress, anxiety, depression, and promoting healthy coping strategies and support seeking.</p>
                    </div>
                    <div class="tip-card">
                        <img src={role_model} alt="Role Model" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Role Model and Mentor</h3><br></br>
                        <p>Psychiatrists model healthy coping and lifestyles, sharing personal stories to inspire students to prioritize mental health and seek help when needed, fostering a supportive environment.</p>
                    </div>
                    <div class="tip-card">
                        <img src={counseling} alt="Role Model" width="300px" height="300px"></img>
                        <br></br><br></br>
                        <h3>Counseling and Support</h3><br></br>
                        <p>
                            Having a doctor or psychologist in school offers students a safe place to discuss personal health concerns, receive counseling, and get referrals to necessary healthcare services.</p>
                    </div>
                </div>
                <br></br><br></br>
                <h2>Connect with a Psychiatrist </h2><br></br>
                <button class="button"  >
                    <Link to="/doctor" class='nav-link '>Connect</Link>
                </button> <br></br> <br></br>
            </center>
        </div>

    )
}
export default Doctor;