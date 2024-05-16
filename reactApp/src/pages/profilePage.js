import React from 'react';
import { useQuery } from 'react-query';
import { getProfiles } from '../api/movies-api';

const ProfilesPage = () => {
    const { data, error, isLoading, isError } = useQuery('profiles', getProfiles);
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const profiles = data;

    return (
        <div>
            <h2>Profiles</h2>
            {profiles.map((profile) => (
                <li key={profile._id}>
                    <h3>Name: {profile.fullName}</h3>
                    <p>DOB: {profile.dateOfBirth}</p>
                    <p>Bio: {profile.bio}</p>
                </li>
            ))}
        </div>
    );
}
export default ProfilesPage; 