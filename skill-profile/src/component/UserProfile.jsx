/* eslint-disable no-unused-vars */
// src/components/UserProfile.js
import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';

const user = {
    name: 'Hunay Subhash Chennu',
    email: 'hunaysubhash97@gmail.com',
    profilePicture: '/src/images/hunay.jpg',
    //profilePicture: 'https://via.placeholder.com/151',
    bio: 'Software Developer at XYZ Company',
    location: 'Hyderabad, IN',
};

function UserProfile() {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                <Avatar
                    alt={user.name}
                    src={user.profilePicture}
                    style={{ width: '150px', height: '150px', margin: 'auto' }}
                />
                <Typography variant="h4" gutterBottom>
                    {user.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {user.email}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {user.location}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '16px' }}>
                    {user.bio}
                </Typography>
            </Paper>
        </Container>
    );
}

export default UserProfile;
