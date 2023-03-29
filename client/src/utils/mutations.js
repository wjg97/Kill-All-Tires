import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_VEHICLE = gql`
  mutation addVehicle($make: String!, $model: Sting!, $year: Int!, $username: String!) {
    addVehicle(make: $make, model: $model, year: $year, username: $username) {
        vehicle {
            _id
            make
            model
            year
            username
        }
    }
  }
`
export const ADD_APPOINTMENT = gql `
  mutation addAppointment ($date: Int!, $time: Int!, $user: String!, $vehicle: String!) {
    addAppointment (date: $date, time: $time, user: $user, vehicle: $vehicle) {
        appointment {
            _id
            date
            time
            user
            vehicle
        }
    }
  }
`