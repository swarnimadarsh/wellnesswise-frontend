import Axios from "axios";
import { Link } from "react-router-dom";


function AppoinmentListRow(props) {

    const handleclick = () => {
        Axios.delete("https://wellnesswise-backend.onrender.com/doctorRoute/delete/" + props.obj._id)
            .then((res) => {
                if (res.status === 200) {
                    alert("recorded deleted sucessufully");
                    window.location.reload();
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.appoinmentdate}</td>
            <td>{props.obj.appoinmenttime}</td>
            {console.log(props.obj._id)}
            <td class="text-center">
                <button class="btn btn-success">
                    <Link class="nav-link" to={"/editappoinment/" + props.obj._id}>Edit</Link>
                </button>
                <button onClick={handleclick} class="btn btn-danger">
                    Remove
                </button>
            </td>
        </tr>
    )
}

export default AppoinmentListRow;