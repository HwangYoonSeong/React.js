import React from 'react';

const Home = ({ history }) => {
    return (
        <div>
            Home
            <br></br>
            <button onClick={() => { history.push('/posts') }}>
                BUTTON
            </button>
        </div>
    );
};

export default Home;