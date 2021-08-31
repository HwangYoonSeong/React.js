import React from 'react';
import Users from './Components/vlptAPIintegrateComp/Users';
import { UsersProvider } from './Components/vlptAPIintegrateComp/UsersContext';

function App () {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
}

export default App;