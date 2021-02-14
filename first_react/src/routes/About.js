import React from 'react';

const About = ({ match }) => {
    return (
        <div>
            {match.params.username}'s Introduce
        </div>
    );
};

export default About;