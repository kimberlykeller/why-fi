import actionCreator from './helpers';

// A list of actions that we can dispatch for redux

/* Action Types */
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_AUTH_TYPE = 'SET_AUTH_TYPE';
const SET_AUTH_PAGE = 'SET_AUTH_PAGE';
const SET_CURRENT_NONPROFIT = 'SET_CURRENT_NONPROFIT';
const SET_REGISTRATION_USER_TYPE = 'SET_REGISTRATION_USER_TYPE';
const SET_LOGGING_IN = 'SET_LOGGING_IN';

export const actionTypes = {
    SET_CURRENT_PAGE,
    SET_AUTH_TYPE,
    SET_AUTH_PAGE,
    SET_CURRENT_NONPROFIT,
    SET_REGISTRATION_USER_TYPE,
    SET_LOGGING_IN,
};

/* Actions */

// Set the current "page" of the system
export const setCurrentPage = actionCreator(SET_CURRENT_PAGE);

// Set the current "auth type" of the system
export const setAuthType = actionCreator(SET_AUTH_TYPE);

// Set the current "auth page" of the system
export const setAuthPage = actionCreator(SET_AUTH_PAGE);

// Set the current "auth page" of the system
export const setCurrentNonProfit = actionCreator(SET_CURRENT_NONPROFIT);

// Set the current "auth page" of the system
export const setRegistrationUserType = actionCreator(SET_REGISTRATION_USER_TYPE);

// Set the current "auth page" of the system
export const setLoggingIn = actionCreator(SET_LOGGING_IN);

