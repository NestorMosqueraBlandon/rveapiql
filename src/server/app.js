import {ApolloServer, gql} from "apollo-server"
import { subscribe } from "graphql";

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
  slug: String
  image: String
}

type Query {
  posts: [Post]
  getPost(slug: String): [Post]
}

type Mutation{
    createPost(title: String, description:String, markdown:String, category:String, image:String): String
    subscriber(name: String, email: String): String
}
`



const resolvers = {
    Query:{
         async posts(_, {} ) {
            const posts = await Post.find({});
            return posts;
        },
        async getPost(_, {slug} ) {
            const post = await Post.find({slug: slug});
            return post;
        },
    },
    
    Mutation: {
        async createPost(_, {title, description, markdown, category, image}){
            const newPost = new Post({
                title,
                description,
                markdown,
                category,
                image
            })
            
            await newPost.save();
            return "Created Successfully"
        },

        async subscriber(_, {name, email}){
            // const newSubscriber =
        }
    }

   
}

const server = new ApolloServer({typeDefs, resolvers});

export default server
