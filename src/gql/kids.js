import { gql } from "@apollo/client";

export const GET_KIDS = gql`
  query ($ID: ID, $first_name: String, $last_name: String, $skip: Int) {
    kid(ID: $ID, first_name: $first_name, last_name: $last_name, skip: $skip) {
      ID
      first_name
      last_name
      guardian_first_name
      guardian_last_name
      second_guardian_first_name
      second_guardian_last_name
      age
      photo
      guardian_phone_number
      registration
    }
  }
`;
