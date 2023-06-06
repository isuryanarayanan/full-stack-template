// Mutations for the accounts app are defined here
import { Mutation } from "../interfaces";

export const recieveOtp: Mutation = {
  name: "forgotPasswordOtpVerify",

  request: `
    mutation forgotPasswordOtpVerify($initiate:Boolean, $email:String!) {
      forgotPassword(initiate:$initiate , email:$email) {
        ---query---
      }
    }
  `,
  body: `
   message
  `,
  args: ["initiate", "email"],
};

export const otpVerify: Mutation = {
  name: "otpVerify",

  request: `
    mutation otpVerify($validate:Boolean!, $otp:String!, $email:String!) {
      forgotPassword(validate:$validate , email:$email , otp:$otp) {
        ---query---
      }
    }
  `,
  body: `
   message
   ghostCode
   otp
  `,
  args: ["validate", "email" , "otp" ],
};

export const setNewPassword: Mutation = {
  name: "setNewPassword",
  
  request: `
    mutation setNewPassword($complete:Boolean!, $otp:String!, $email:String! ,$ghostCode:String! ,$newPassword:String!) {
      forgotPassword(complete:$complete, otp:$otp, email:$email ,ghostCode:$ghostCode ,newPassword:$newPassword) {
        ---query---
      }
    }
  `,
  body: `
   message
   
  `,
  args: ["complete", "otp" , "ghostCode" ,"new_password" ],
};

export const emailVerifyInitiate: Mutation = {
  name: "emailVerifyInitiate",
  //mutation to verify email 
  //expected payload
  // {
  //   email:email
  //   otp:otp
  // }
  request: `
    mutation validateEmail($validate:Boolean!, $otp:String!) {
      validateEmail(validate:$validate , otp:$otp) {
        ---query---
      }
    }
  `,
  //response 
  body: `
   message
   ghostCode
   otp
  `,
  args: ["validate" , "otp" ],
};

export const emailVerifyComplete: Mutation = {
  name: "emailVerify",
  //mutataion to complete the email verification 
  // expected payload format 
  // {
  //   complete:true
  //   otp:otp_id
  //   ghostcode:ghostCode
  // }
  request: `
    mutation emailVerifyComplete($complete:Boolean!, $otp:String!, $ghostCode:String!) {
      validateEmail(complete:$complete  , otp:$otp ,ghostCode:$ghostCode ) {
        ---query---
      }
    }
  `,
  body: `
   message
   
   `,
  args: ["validate", "email" , "otp" ],
};

export const resendOtp: Mutation = {
  name: "resendOtp",

  request: `
    mutation validateEmail($initiate:Boolean) {
      validateEmail(initiate:$initiate ) {
        ---query---
      }
    }
  `,
  body: `
   message
  `,
  args: ["initiate"],
}