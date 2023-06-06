import { gql } from "@apollo/client";

const UPDATE_USER_DOB = gql`
  mutation updateUserDob($dob: Date!) {
    updateUserDob(dob: $dob) {
      message
      user {
        id
        email
      }
    }
  }
`;
