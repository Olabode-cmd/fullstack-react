import { useState, useEffect } from 'react';

const LoginAssignment = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('')
    return (
        <div>
            <h1>Login Assignment</h1>

            <form>
                <input />
                <input />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginAssignment;