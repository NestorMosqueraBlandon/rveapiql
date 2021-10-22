import {ApolloServer, gql} from "apollo-server"
import { subscribe } from "graphql";


// const multer = require("multer");
// const path = require("path");

import typeDefs from "../graphql/typeDefs.js"
import resolvers from "../graphql/resolvers/index.js"



const server = new ApolloServer({typeDefs, resolvers});

export default server
