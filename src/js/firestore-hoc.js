import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';

// This sets up the user filtering query that should be present on all lists
const UnconnectedFirestoreFilterHOC = (connections) => 
    (Component) => 
    (props) =>
{
    const { user, userType, ...componentProps } = props;
    const filteredConnections = [];
    
    for (const connection of connections) {
        let filteredConnection = cloneDeep(connection);
        const whereUserFilter = [userType, '==', user];
        
        console.log(filteredConnection);
        
        // if a where is already passed, just add this where to it
        if (filteredConnection.where) {
            console.log('hey??');
            // if there already is an array of arrays, just add the
            // new user filter to it
            if (isArray(filteredConnection.where[0])) {
                filteredConnection.where.push(whereUserFilter)
            }
            // if there is only one filter connected, set up the where
            // to handle two filters
            else {
                const prevWhere = cloneDeep(filteredConnection.where);
                filteredConnection.where = [prevWhere, whereUserFilter]
            }
        }
        // if there is no where, create one
        else {
            filteredConnection.where = whereUserFilter;
        }
        console.log(filteredConnection);
        
        filteredConnections.push(filteredConnection);
    }
    
    const FirestoreComponent = firestoreConnect(filteredConnections)(
        Component
    );
    
    return <FirestoreComponent {...componentProps} />;
};

const ms2p = ({ firebase: { auth, profile } }) => ({
    user: auth.uid,
    userType: profile.type,
});

// This sets up the connect for the unconnected HOC, that way it has access
// to the signed in user's uid
const FirestoreFilterHOC = (connections) => (Component) => (props) => {
    const FirestoreComponent = UnconnectedFirestoreFilterHOC(connections)(
        Component
    );
    const ConnectedFirestoreComponent = connect(ms2p, () => ({}))(
        FirestoreComponent
    );
    
    return <ConnectedFirestoreComponent {...props} />;
}

export default FirestoreFilterHOC;