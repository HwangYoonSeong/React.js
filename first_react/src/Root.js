import React from 'react';
import { Provider } from 'react-redux';
import store from './Components/ReduxComp/store';

import App from './Components/ReduxComp/components/App';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;