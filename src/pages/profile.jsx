import { useState, useEffect } from 'react'

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    const fetchProfile = async () => {
        setLoading(true);
        try {
            console.log('Fetching data')
            const response = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log('Response gotten')
            if (!response.ok) {
                throw new Error('Failed to fetch profile. Please log in again.');
            }

            console.log('Response is okay')

            const data = await response.json();
            console.log(data)
            setUser(data);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <p className="px-3 py-6 text-center text-blue-700">Fetching user profile....</p>
    }

    if (error) {
        return <p className="px-3 py-6 text-center text-red-700">Error: {error}</p>
    }

    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">Profile for {user?.firstName}</h1>

            <div className="bg-white rounded-md px-4 py-3 flex gap-x-3 items-center">
                <div>
                    {/* <img src="" alt="user image" className="h-24 w-24 object-cover rounded-full" /> */}
                </div>

                <div>

                </div>

            </div>
            
        </div>
    )
}

export default Profile;