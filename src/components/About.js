import { useNavigate } from "react-router-dom";

function About(){
    const navigate=useNavigate();
    
    function clickHandler(){
        navigate("/support")

    }
    return (
        <div>
            <h1>This is About Page</h1>
            <button onClick={clickHandler}>Move to Support Page</button>
        </div>
    );
}
export default About;