import React from 'react';
import { useQuery } from 'react-query';

const ProfilePage = () => {
    const { data, error, isLoading, isError } = useQuery('profile', getProfile);
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const profile = data;

    return (
        <div>
            <h2>My Profile</h2>
            <p>Name: {profile.fullName}</p>
            <p>DOB: {profile.dateOfBirth}</p>
            <p>Bio: {profile.bio}</p>
        </div>
    );
}

export default ProfilePage; 