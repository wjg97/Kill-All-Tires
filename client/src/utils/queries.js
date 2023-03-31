import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username){
            _id
            username
            email
            vehicles {
                _id
                make
                model
                year
            }
        }
    }`

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            email
            vehicles {
                _id
                make
                model
                year
            }
        }
    }`

export const QUERY_VEHICLES = gql`
    query vehicles {
        vehicles {
            _id
            make
            model
            year
            user {
                _id
                username
            }
        }
    }`

export const QUERY_VEHICLE = gql`
    query vehicle {
        _id
        make
        model
        year
    }`

export const QUERY_APPOINTMENTS = gql`
    query appointments {
        appointments {
            _id
            date
            time
            user {
                _id
                username
            }
            vehicle {
                _id
                make
                model
                year
            }
        }
    }`

export const QUERY_APPOINTMENT = gql`
    query appointment {
        _id
        date
        time
        user
        vehicle
    }`

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            vehicles {
                _id
                make
                model
                year
            }
        }
    }
`