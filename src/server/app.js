import {ApolloServer, gql} from "apollo-server"

import Post from "../models/Post.js"
// const multer = require("multer");
// const path = require("path");

const typeDefs = gql`

type Post {
    id: ID
  title: String
  description: String
  sanitizedHtml: String
  category: String
  createdAt: String
}

type Query {
  posts: [Post]
}

type Mutation{
    createPost(title: String, description:String, markdown:String, category:String): String
}
`



const resolvers = {
    Query:{
         async posts(_, {} ) {
            const posts = await Post.find({});

            return posts;
        },
    },
    Mutation: {
        async createPost(_, {title, description, markdown, category}){
            const newPost = new Post({
                title,
                description,
                markdown,
                category
            })
            
            await newPost.save();
            return "Created Successfully"
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers});

export default server
