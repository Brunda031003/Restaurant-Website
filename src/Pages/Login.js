import './login.css';

function Login() {
    const handleLogin = (event) => {
        event.preventDefault();
        // Add logic for authentication here
        alert('Login successful!');
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter your username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
