import React from 'react'

const Profilee = () => {

    const [profile, setProfile] = React.useState({
        name: '',
        age: '',
        location: '',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300'
    });
    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    }
    const cardStyle = {
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    const handleNameChange = (e) => {
        setProfile({ ...profile, name: e.target.value });
    };
    const handleAgeChange = (e) => {
        setProfile({ ...profile, age: e.target.value });
    };
    const handleLocationChange = (e) => {
        setProfile({ ...profile, location: e.target.value });
    };
    return (
        <div style={cardStyle}>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name" value={profile.name} onChange={handleNameChange} />
                </label>
                <label htmlFor="age">
                    Age:<input type="number" id="age" value={profile.age} onChange={handleAgeChange} />
                </label>
                <label htmlFor="location">
                    Location:<input type="text" id="location" value={profile.location} onChange={handleLocationChange} />
                </label>
            </div>
            <h2>Profile Component</h2>
            <img src={profile.imageUrl} alt="Profile" style={imgStyle} />
            <h3>Name: {profile.name}</h3>
            <p>Age: {profile.age}</p>
            <p>Location: {profile.location}</p>

        </div>
    )
}

export default Profilee
