import { useNavigate } from "react-router-dom";

function Support(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
            <h1>This is Support Page</h1>
            <button onClick={clickHandler}>Move to About Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
    );
}
export default Support;