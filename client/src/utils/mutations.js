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
  mutation addVehicle($make: String!, $model: String!, $year: Int!, $user: String!) {
    addVehicle(make: $make, model: $model, year: $year, user: $user) {
        vehicle {
            _id
            make
            model
            year
            user
        }
    }
  }
`;

export const REMOVE_VEHICLE = gql`
  mutation removeVehicle($_id: ID!) {
    removeVehicle(_id: $_id) {
        _id
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($date: String!, $time: String!, $vehicle: String!, $user: String!) {
    addAppointment(date: $date, time: $time, vehicle: $vehicle, user: $user) {
        appointment {
            _id
            date
            time
            vehicle
            user
        }
    }
  }
`;

export const REMOVE_APPOINTMENT = gql`
  mutation removeAppointment($_id: ID!) {
    removeAppointment(_id: $_id) {
        _id
    }
  }
`;

// temporary mutation to test the appointmentv2 type
export const ADD_APPOINTMENTV2 = gql`
  mutation addAppointmentv2($service: String, $year: String, $make: String, $model: String, $date: String, $time: String!, $user: ID!) {
    addAppointmentv2(service: $service, year: $year, make: $make, model: $model, date: $date, time: $time, userId: $user) {
        appointmentv2 {
            _id
            service
            year
            make
            model
            date
            time
            user
        }
    }
  }
`;

export const REMOVE_APPOINTMENTV2 = gql`
  mutation removeAppointmentv2($_id: ID!) {
    removeAppointment(_id: $_id) {
        _id
    }
  }
`;