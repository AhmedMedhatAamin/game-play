import React, { useState } from 'react';

const Login = ({ onClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simple validation
        if (email === '' || password === '') {
            setErrorMessage('Please fill in both fields');
            return;
        }

        setLoading(true); // Show loading state

        // Simulate API call
        setTimeout(() => {
            if (email === 'user@example.com' && password === 'password') {
                // Simulate successful login
                console.log('Logged in!');
                setEmail('');
                setPassword('');
                setErrorMessage('');
                onClick(); // Assuming this redirects to another component
            } else {
                // Simulate login failure
                setErrorMessage('Invalid email or password');
            }
            setLoading(false); // Hide loading state
        }, 1500);
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        disabled={loading} // Disable input while loading
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        disabled={loading} // Disable input while loading
                    />
                </div>
                <button type="submit" style={styles.button} disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default Login;
