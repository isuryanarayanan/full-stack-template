/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
};

/** All the queries for the accounts app need to be added here as a parameter. */
export type Query = {
  __typename?: 'Query';
  serverTime?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * # Create a new Social User
   * This mutation is used to create a new user. It takes in the following arguments:
   * - oauthToken
   * - provider
   * - referral
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     createOauthUser(oauthToken:<"oauth_token">, provider:"GOOGLE", referral:"<referral code> (optional))") {
   *         message
   *         user{
   *             id
   *             email
   *             isEmailVerified
   *             isPoliciesAccepted
   *             isSelectedGames
   *             isAppliedUsername
   *             isSelectedAvatar
   *         }
   *         accessToken
   *         refreshToken
   *     }
   * }
   * ```
   */
  createOauthUser?: Maybe<CreateOauthUser>;
  /**
   * # Creating a new user
   * This mutation is used to create a new user. It takes in the following arguments:
   * - email
   * - dob
   * - password
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     createUser(email:"superuser@gmail.com", password:"superuser123", dob:"1999-01-01", referral:"<referral code> (optional))", isPoliciesAccepted:true/false) {
   *         message
   *         user{
   *             id
   *             email
   *         }
   *         accessToken
   *         refreshToken
   *     }
   * }
   * ```
   *
   * Access token and refresh token are generated when the user is created. It is needed
   * to authenticate the user for future requests.
   *
   * To authenticate using access token, add the following to the request header:
   * ```
   * Authorization: JWT <access_token>
   * ```
   *
   * After the user is created an One Time Password is sent to the user's email address. The user can then use
   * the OTP to verify their email address and activate their account. This mutation is available in the /otp/
   * endpoint.
   */
  createUser?: Maybe<CreateUser>;
  /**
   * # Creating a username for the user.
   * A username is not just a field in the user model, it is a separate model
   * that has a 1 to 1 relationship with the user model. So when you create a
   * username, you are creating a new object in the username model and is automatically
   * linked to the user model of the user which created it.
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     createUsername(username:"superuser"){
   *         message
   *         user{
   *             id
   *         }
   *         username {
   *             id
   *             username
   *             tag
   *         }
   *     }
   * }
   * ```
   *
   * Username consists of 2 parts:
   * - username
   * - tag
   *
   * The username is the name that the user chooses, and the tag is a random 4 digit number
   * that is generated when the username is created. The tag is used to differentiate between
   * users with the same username. A user can only have 1 username, and a username can only be used by 1 user.
   */
  createUsername?: Maybe<CreateUsername>;
  /**
   * # Editing a username for the user.
   * A username is not just a field in the user model, it is a separate model
   * that has a 1 to 1 relationship with the user model. So when you edit a
   * username, you are editing an object in the username model and is automatically
   * linked to the user model of the user which created it.
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     editUsername(username:"superuser"){
   *         message
   *         user{
   *             id
   *         }
   *         username {
   *             id
   *             username
   *             tag
   *         }
   *     }
   * }
   * ```
   *
   * Username consists of 2 parts:
   * - username
   * - tag
   *
   * The username is the name that the user chooses, and the tag is a random 4 digit number
   * that is generated when the username is created. The tag is used to differentiate between
   * users with the same username. A user can only have 1 username, and a username can only be used by 1 user.
   */
  editUsername?: Maybe<EditUsername>;
  /**
   * # Obtaining access and refresh tokens
   * This mutation is used to obtain access and refresh tokens. It takes in the following arguments:
   * - token
   * - provider
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     obtainSocialToken(provider:"GOOGLE", oauthToken:"<>") {
   *         message
   *         user{
   *             id
   *             email
   *             isEmailVerified
   *             isPoliciesAccepted
   *             isSelectedGames
   *             isAppliedUsername
   *             isSelectedAvatar
   *         }
   *         accessToken
   *         refreshToken
   *     }
   * }
   * ```
   */
  obtainSocialToken?: Maybe<ObtainSocialJsonWebToken>;
  /**
   * # Obtaining access and refresh tokens
   * This mutation is used to obtain access and refresh tokens. It takes in the following arguments:
   * - email | username
   * - password
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     obtainToken(identifier:"<Email address or Username with tag>", password:"<>") {
   *         message
   *         user{
   *             id
   *             email
   *             isEmailVerified
   *             isPoliciesAccepted
   *             isSelectedGames
   *             isAppliedUsername
   *             isSelectedAvatar
   *         }
   *         accessToken
   *         refreshToken
   *     }
   * }
   * ```
   *
   * You can use the access token to identify yourself in the future. The access token is valid for 10 minutes.
   * It is used via the Authorization header in the following format:
   *
   * ```
   * {
   *     "Authorization": "JWT <Access token>"
   * }
   * ```
   *
   * The refresh token is valid for 365 days. It is used to refresh the period of the access token.
   */
  obtainToken?: Maybe<ObtainJsonWebToken>;
  /**
   * # Refreshing access and refresh tokens
   *
   * This mutation is used to refresh the access and refresh tokens. It takes in the following arguments:
   * - refresh_token
   * - refresh
   *
   * Here is an example of how to use this mutation:
   * ```
   * mutation {
   *     refreshToken(refreshToken:"<your-refresh-token>", refresh:<true or false>) {
   *         message
   *         accessToken
   *         refreshToken
   *     }
   * }
   * ```
   *
   * If the refresh argument is true, then the refresh token is also refreshed, else it is not only the access token that is refreshed.
   * This is used when the user logs out and logs in again.
   */
  refreshToken?: Maybe<RefreshJsonWebToken>;
  /**
   * # Updating a user's password
   *
   * This mutation is used to update a user's password. It takes in the following arguments:
   * - password
   * - newPassword
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     updatePassword(password:"<Current password>", newPassword:"<>") {
   *         message
   *         user{
   *             id
   *             email
   *         }
   *     }
   * }
   * ```
   *
   * This is a private mutation, so you need to be logged in to use it.
   * see [Obtaining access and refresh tokens](#obtaining-access-and-refresh-tokens) for more information.
   */
  updatePassword?: Maybe<UpdatePassword>;
  /**
   * # Updating the user's date of birth (dob).
   *
   * Here is an example of how to use this mutation:
   *
   * ```
   * mutation {
   *     updateUserDOB(dob:"2000-01-01"){
   *         message
   *         user{
   *             id
   *             dob
   *         }
   *     }
   * }
   * ```
   *
   * This mutation updates the user's dob with the provided date.
   */
  updateUserDob?: Maybe<UpdateUserDob>;
  /**
   * # Verifying an access token
   *
   * This mutation is used to verify the access token. It takes in the following arguments:
   * - access_token
   *
   * Here is an example of how to use this mutation:
   * ```graphql
   * mutation {
   *     verifyToken {
   *         message
   *         user{
   *             id
   *             email
   *         }
   *     }
   * }
   * ```
   *
   * This is used to verify the access token, so the header must contain the access token.
   * Here is how to use the access token in the header:
   * ```
   * {
   * "Authorization":"JWT <access_token>"
   * }
   */
  verifyToken?: Maybe<VerifyJsonWebToken>;
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationCreateOauthUserArgs = {
  oauthToken: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  referral?: InputMaybe<Scalars['String']['input']>;
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationCreateUserArgs = {
  dob: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  isPoliciesAccepted: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  referral?: InputMaybe<Scalars['String']['input']>;
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationCreateUsernameArgs = {
  username: Scalars['String']['input'];
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationEditUsernameArgs = {
  username: Scalars['String']['input'];
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationObtainSocialTokenArgs = {
  oauthToken: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationObtainTokenArgs = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationRefreshTokenArgs = {
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
  refreshToken: Scalars['String']['input'];
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/**
 * # Accounts mutations
 * - `createUser` - Create a new user
 * - `createOauthUser` - Create a new user with social oauth
 * - `updateUserDob` - Update the date of birth of the user
 * - `createUsername` - Create a username for the user
 * - `editUsername` - Edit the username of the user
 * - `passwordUpdate` - Update the password of a user
 * - `obtainToken` - Obtain access and refresh tokens
 * - `obtainSocialToken` - Obtain access and refresh token with social oauth
 * - `refreshToken` - Refresh the access token
 * - `verifyToken` - Verify the access token
 * - `createPhone` - Adds a phone number for the user
 * - `editPhone` - Edit the phone number of the user
 */
export type MutationUpdateUserDobArgs = {
  dob: Scalars['Date']['input'];
};

/**
 * # Create a new Social User
 * This mutation is used to create a new user. It takes in the following arguments:
 * - oauthToken
 * - provider
 * - referral
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     createOauthUser(oauthToken:<"oauth_token">, provider:"GOOGLE", referral:"<referral code> (optional))") {
 *         message
 *         user{
 *             id
 *             email
 *             isEmailVerified
 *             isPoliciesAccepted
 *             isSelectedGames
 *             isAppliedUsername
 *             isSelectedAvatar
 *         }
 *         accessToken
 *         refreshToken
 *     }
 * }
 * ```
 */
export type CreateOauthUser = {
  __typename?: 'CreateOauthUser';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  dateJoined: Scalars['DateTime']['output'];
  dob?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  isAppliedUsername?: Maybe<Scalars['Boolean']['output']>;
  isDobVerified: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isPoliciesAccepted: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  provider?: Maybe<UserProvider>;
  referral: Array<ReferralType>;
  username?: Maybe<UsernameType>;
};

/** An enumeration. */
export enum UserProvider {
  /** email */
  Email = 'EMAIL',
  /** google */
  Google = 'GOOGLE'
}

export type ReferralType = {
  __typename?: 'ReferralType';
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  referred: Array<ReferredType>;
  user: UserType;
};

export type ReferredType = {
  __typename?: 'ReferredType';
  id: Scalars['ID']['output'];
  referral: ReferralType;
  user: UserType;
};

export type UsernameType = {
  __typename?: 'UsernameType';
  id: Scalars['ID']['output'];
  tag?: Maybe<Scalars['String']['output']>;
  user: UserType;
  username?: Maybe<Scalars['String']['output']>;
};

/**
 * # Creating a new user
 * This mutation is used to create a new user. It takes in the following arguments:
 * - email
 * - dob
 * - password
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     createUser(email:"superuser@gmail.com", password:"superuser123", dob:"1999-01-01", referral:"<referral code> (optional))", isPoliciesAccepted:true/false) {
 *         message
 *         user{
 *             id
 *             email
 *         }
 *         accessToken
 *         refreshToken
 *     }
 * }
 * ```
 *
 * Access token and refresh token are generated when the user is created. It is needed
 * to authenticate the user for future requests.
 *
 * To authenticate using access token, add the following to the request header:
 * ```
 * Authorization: JWT <access_token>
 * ```
 *
 * After the user is created an One Time Password is sent to the user's email address. The user can then use
 * the OTP to verify their email address and activate their account. This mutation is available in the /otp/
 * endpoint.
 */
export type CreateUser = {
  __typename?: 'CreateUser';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

/**
 * # Creating a username for the user.
 * A username is not just a field in the user model, it is a separate model
 * that has a 1 to 1 relationship with the user model. So when you create a
 * username, you are creating a new object in the username model and is automatically
 * linked to the user model of the user which created it.
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     createUsername(username:"superuser"){
 *         message
 *         user{
 *             id
 *         }
 *         username {
 *             id
 *             username
 *             tag
 *         }
 *     }
 * }
 * ```
 *
 * Username consists of 2 parts:
 * - username
 * - tag
 *
 * The username is the name that the user chooses, and the tag is a random 4 digit number
 * that is generated when the username is created. The tag is used to differentiate between
 * users with the same username. A user can only have 1 username, and a username can only be used by 1 user.
 */
export type CreateUsername = {
  __typename?: 'CreateUsername';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
  username?: Maybe<UsernameType>;
};

/**
 * # Editing a username for the user.
 * A username is not just a field in the user model, it is a separate model
 * that has a 1 to 1 relationship with the user model. So when you edit a
 * username, you are editing an object in the username model and is automatically
 * linked to the user model of the user which created it.
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     editUsername(username:"superuser"){
 *         message
 *         user{
 *             id
 *         }
 *         username {
 *             id
 *             username
 *             tag
 *         }
 *     }
 * }
 * ```
 *
 * Username consists of 2 parts:
 * - username
 * - tag
 *
 * The username is the name that the user chooses, and the tag is a random 4 digit number
 * that is generated when the username is created. The tag is used to differentiate between
 * users with the same username. A user can only have 1 username, and a username can only be used by 1 user.
 */
export type EditUsername = {
  __typename?: 'EditUsername';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
  username?: Maybe<UsernameType>;
};

/**
 * # Obtaining access and refresh tokens
 * This mutation is used to obtain access and refresh tokens. It takes in the following arguments:
 * - token
 * - provider
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     obtainSocialToken(provider:"GOOGLE", oauthToken:"<>") {
 *         message
 *         user{
 *             id
 *             email
 *             isEmailVerified
 *             isPoliciesAccepted
 *             isSelectedGames
 *             isAppliedUsername
 *             isSelectedAvatar
 *         }
 *         accessToken
 *         refreshToken
 *     }
 * }
 * ```
 */
export type ObtainSocialJsonWebToken = {
  __typename?: 'ObtainSocialJSONWebToken';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

/**
 * # Obtaining access and refresh tokens
 * This mutation is used to obtain access and refresh tokens. It takes in the following arguments:
 * - email | username
 * - password
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     obtainToken(identifier:"<Email address or Username with tag>", password:"<>") {
 *         message
 *         user{
 *             id
 *             email
 *             isEmailVerified
 *             isPoliciesAccepted
 *             isSelectedGames
 *             isAppliedUsername
 *             isSelectedAvatar
 *         }
 *         accessToken
 *         refreshToken
 *     }
 * }
 * ```
 *
 * You can use the access token to identify yourself in the future. The access token is valid for 10 minutes.
 * It is used via the Authorization header in the following format:
 *
 * ```
 * {
 *     "Authorization": "JWT <Access token>"
 * }
 * ```
 *
 * The refresh token is valid for 365 days. It is used to refresh the period of the access token.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

/**
 * # Refreshing access and refresh tokens
 *
 * This mutation is used to refresh the access and refresh tokens. It takes in the following arguments:
 * - refresh_token
 * - refresh
 *
 * Here is an example of how to use this mutation:
 * ```
 * mutation {
 *     refreshToken(refreshToken:"<your-refresh-token>", refresh:<true or false>) {
 *         message
 *         accessToken
 *         refreshToken
 *     }
 * }
 * ```
 *
 * If the refresh argument is true, then the refresh token is also refreshed, else it is not only the access token that is refreshed.
 * This is used when the user logs out and logs in again.
 */
export type RefreshJsonWebToken = {
  __typename?: 'RefreshJSONWebToken';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

/**
 * # Updating a user's password
 *
 * This mutation is used to update a user's password. It takes in the following arguments:
 * - password
 * - newPassword
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     updatePassword(password:"<Current password>", newPassword:"<>") {
 *         message
 *         user{
 *             id
 *             email
 *         }
 *     }
 * }
 * ```
 *
 * This is a private mutation, so you need to be logged in to use it.
 * see [Obtaining access and refresh tokens](#obtaining-access-and-refresh-tokens) for more information.
 */
export type UpdatePassword = {
  __typename?: 'UpdatePassword';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

/**
 * # Updating the user's date of birth (dob).
 *
 * Here is an example of how to use this mutation:
 *
 * ```
 * mutation {
 *     updateUserDOB(dob:"2000-01-01"){
 *         message
 *         user{
 *             id
 *             dob
 *         }
 *     }
 * }
 * ```
 *
 * This mutation updates the user's dob with the provided date.
 */
export type UpdateUserDob = {
  __typename?: 'UpdateUserDOB';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

/**
 * # Verifying an access token
 *
 * This mutation is used to verify the access token. It takes in the following arguments:
 * - access_token
 *
 * Here is an example of how to use this mutation:
 * ```graphql
 * mutation {
 *     verifyToken {
 *         message
 *         user{
 *             id
 *             email
 *         }
 *     }
 * }
 * ```
 *
 * This is used to verify the access token, so the header must contain the access token.
 * Here is how to use the access token in the header:
 * ```
 * {
 * "Authorization":"JWT <access_token>"
 * }
 */
export type VerifyJsonWebToken = {
  __typename?: 'VerifyJSONWebToken';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

export type UpdateUserDobMutationVariables = Exact<{
  dob: Scalars['Date']['input'];
}>;


export type UpdateUserDobMutation = { __typename?: 'Mutation', updateUserDob?: { __typename?: 'UpdateUserDOB', message?: string | null, user?: { __typename?: 'UserType', id: string, email: string } | null } | null };


export const UpdateUserDobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserDob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserDob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dob"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserDobMutation, UpdateUserDobMutationVariables>;