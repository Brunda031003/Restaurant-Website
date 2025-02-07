import './welcome.css'
function Welcome(props){
    return(
        <div className="Welcome-box">
            <h1>Hello {props.name}! Your age is {props.age}</h1>
            <p>Welcome to components </p>
        </div>
    );
}

export default Welcome;