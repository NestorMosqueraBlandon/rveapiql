import { gql } from "apollo-server";

const typeDefs = gql`

type Post {
  id: ID
  title: String
  description: String
  sanitizedHtml: String
  category: String
  createdAt: String
  slug: String
  image: String
  username: String
  userphoto: String
}

type Subscriber{
    id: ID
    name: String
    email: String
}

type User{
    id: ID
    firstname: String
    middlename: String
    lastname: String
    middlelastname: String
    username: String
    email: String
    token: String
    points: String
    createdAt:String
    games: String
    tournaments: String
    friends: String
    views: String
    level: String
    followers: String
    photo: String
}

input SignupInput{
    firstname: String
    lastname: String
    username: String
    password: String
    confirmPassword: String
    email: String
}

type Query {
  users(filter: String): [User]
  posts: [Post]
  getPost(slug: String): [Post]
  getSubscribers: [Subscriber]
}

type Mutation{
    createPost(title:String, description:String, markdown:String, category:String, image:String, username: String, userphoto: String): String
    deletePost(id: String): String
    subscriber(name: String, email: String): String
    signup(signupInput: SignupInput): User
    signin(email: String!, password:String!): User
}
`
export default typeDefs;