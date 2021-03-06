import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default (props) => {
    const { initialState } = props;

    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(reduxPromise)
    );

    return(
        <Provider store={store} >
            {props.children}
        </Provider>
    )
}


