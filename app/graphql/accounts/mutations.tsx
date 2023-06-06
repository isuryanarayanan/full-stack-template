// Mutations for the accounts app are defined here
import { Mutation } from "../interfaces";

export const createUser: Mutation = {
  name: "createUser",
  request: `
    mutation CreateUser($email: String!, $password: String!, $dob:Date! ,$isPoliciesAccepted:Boolean!) {
      createUser(email:$email, password: $password, dob:$dob ,isPoliciesAccepted:$isPoliciesAccepted) {
        ---query---
      }
    }
  `,
  body: `
    user {
      id
      email
      dob
      
    }
    accessToken
    refreshToken
  `,
  args: ["email", "password"],
};

export const createOauthUser: Mutation = {
  name: "createUser",
  request: `
    mutation createOauthUser($oauthToken: String!, $provider: String!, $referral:String) {
      createOauthUser(oauthToken:$oauthToken, provider: $provider, referral:$referral) {
        ---query---
      }
    }
  `,
  body: `
  message
  user{
      id
      email
  }
  accessToken
  refreshToken
  `,
  args: ["oauthToken", "provider", "referral"],
};

export const obtainToken: Mutation = {
  name: "obtainToken",

  request: `
    mutation ObtainToken($identifier: String!, $password: String!) {
      obtainToken(identifier: $identifier, password: $password) {
        ---query---
      }
    }
  `,
  body: `
    user {
      id
      username{
        username
        tag
      }
      email
      isEmailVerified
      isPoliciesAccepted
      isSelectedGames
      isAppliedUsername
      isSelectedAvatar
    }
    accessToken
    refreshToken
  `,
  args: ["identifier", "password"],
};

export const obtainSocialToken: Mutation = {
  name: "obtain_social_token",

  request: `
    mutation obtainSocialToken($provider: String!, $oauthToken: String!) {
      obtainSocialToken(provider: $provider, oauthToken: $oauthToken) {
        ---query---
      }
    }
  `,
  body: `
  user {
    id
    username{
      username
      tag
    }
    email
    isEmailVerified
    isPoliciesAccepted
    isSelectedGames
    isAppliedUsername
    isSelectedAvatar
  }
  accessToken
  refreshToken
  `,
  args: ["provider", "oauthToken"],
};

export const verifyToken: Mutation = {
  name: "verifyToken",

  request: `
    mutation verifyToken{
      verifyToken{
        ---query---
    }
    }
  `,
  body: `
  message
  user{
      id
      email
  }
  `,
  args: [],
};

export const refreshToken: Mutation = {
  name: "refreshToken",

  request: `
    mutation refreshToken($refreshToken:String!, $refresh:Boolean!){
      refreshToken(refreshToken:$refreshToken, refresh:$refresh){
        ---query---
    }
    }
  `,
  body: `
  message
  accessToken
  refreshToken
  `,
  args: ["refreshToken", "refresh"],
};

export const editUsername: Mutation = {
  name: "editUsername",

  request: `
    mutation editUsername($username:String!){
      editUsername(username:$username){
        message
        user{
            id
        }
        username {
            id
            username
            tag
        }
    }
    }
  `,
  body: `
  message
        user{
            id
        }
        username {
            id
            username
            tag
        }
  `,
  args: ["username"],
};


export const createUsername: Mutation = {
  name: "createUsername",

  request: `
  mutation  createUsername($username:String!) {
    createUsername(username:$username){
        message
        user{
            id
        }
        username {
            id
            username
            tag
        }
    }
}
  `,
  body: `
  message
        user{
            id
        }
        username {
            id
            username
            tag
        }
  `,
  args: ["username"],
};
export const resetPassword: Mutation = {
  name: "resetPassword",

  request: `
    mutation updatePassword($password:String!,$newPassword:String!){
      updatePassword(password:$password,newPassword:$newPassword){
        ---query---
    }
    }
  `,
  body: `
  message
  user{
      id
      email
  }
  `,
  args: ["password", "newpassword"],
};

export const updateUserDob: Mutation = {
  name: "updateUserDob",

  request: `
  mutation updateUserDob($dob:Date!) {
    updateUserDob(dob:$dob){
        ---query---
    }
  }
  `,
  body: `
  message
  user{
      id
      email
  }
  `,
  args: ["dob"],
};