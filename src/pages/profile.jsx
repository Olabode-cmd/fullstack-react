import { useState, useEffect } from 'react'

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    const fetchProfile = async () => {
        setLoading(true);
        setError(null);
        try {
            if (!token) {
                throw new Error('No authentication token found. Please log in.');
            }
            const response = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (!response.ok) {
                throw new Error('Failed to fetch profile. Please log in again.');
            }
            const data = await response.json();
            setUser(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [])

    if (loading) {
        return <p className="px-3 py-6 text-center text-blue-700">Fetching user profile...</p>
    }

    if (error) {
        return <p className="px-3 py-6 text-center text-red-700">Error: {error}</p>
    }

    if (!user) {
        return <p className="px-3 py-6 text-center text-gray-700">No user data available.</p>
    }

    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">Profile</h1>
            <div className="bg-white rounded-md shadow-md px-6 py-6 flex flex-col sm:flex-row gap-6 items-center max-w-md mx-auto">
                <div>
                    <img
                        src={user.image || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.firstName + ' ' + user.lastName)}
                        alt="user avatar"
                        className="h-24 w-24 object-cover rounded-full border"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2">{user.firstName} {user.lastName}</h2>
                    <p className="text-gray-700 mb-1"><span className="font-medium">Email:</span> {user.email}</p>
                    <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;