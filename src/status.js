import './status.css'
function Status(prop){
    return(
        <div className="Status-box">
            <p>Your package is {prop.stat}</p>
        </div>
    );
}

export default Status;