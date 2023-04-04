import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_VEHICLE = gql`
  query getVehicle {
    vehicle {
      _id
      make  
      model
      year
      user
    }
  }
`;

export const QUERY_SINGLE_APPOINTMENT = gql`
  query getSingleAppointment($appointmentId: ID!) {
    appointment(appointmentId: $appointmentId) {
      _id
      date
      time
      vehicle
      user
    }
  }
`;
