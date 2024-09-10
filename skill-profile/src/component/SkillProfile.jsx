/* eslint-disable no-unused-vars */
// src/components/SkillProfile.js
import React from 'react';
import { Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';

const skills = [
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 70 },
    { name: 'Java', level: 60 },
    { name: 'Spring Boot', level: 50 },
    { name: 'SQL', level: 75 },
];

function SkillProfile() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Skill Profile
            </Typography>
            <Grid container spacing={3}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">{skill.name}</Typography>
                            <LinearProgress variant="determinate" value={skill.level} />
                            <Typography variant="body2" color="textSecondary">
                                {skill.level}%
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SkillProfile;
