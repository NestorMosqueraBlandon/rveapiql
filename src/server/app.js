import {ApolloServer, gql} from "apollo-server"
import { subscribe } from "graphql";

import Post from "../models/Post.js"
import Subscriber from "../models/Subscriber.js";
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
  username: String
  userphoto: String
}

type Subscriber{
    id: ID
    name: String
    email: String
}

type Query {
  posts: [Post]
  getPost(slug: String): [Post]
  getSubscribers: [Subscriber]
}

type Mutation{
    createPost(title:String, description:String, markdown:String, category:String, image:String, username: String, userphoto: String): String
    deletePost(id: String): String
    subscriber(name: String, email: String): String
}
`

const resolvers = {
    Query:{
         async posts(_, {} ) {
            const posts = await Post.find({ createdAt: -1});
            return posts;
        },
        async getPost(_, {slug} ) {
            const post = await Post.find({slug: slug});
            return post;
        },
        async getSubscribers(_, {} ) {
            const subscribers = await Subscriber.find({});
            return subscribers;
        },
    },
    
    Mutation: {
        async createPost(_, {title, description, markdown, category, image, username, userphoto}){
            console.log("entro")

            const newPost = new Post({
                title,
                description,
                markdown,
                category,
                image,
                username,
                userphoto
            })
            
            await newPost.save();
            return "Created Successfully"
        },

        async deletePost(_, {id}){
            const post = await Post.findById(id);

            if(post){
                const deletePost = await post.remove();
                return "Deleted Successfully"
            }

            return "Deleted Error"
            
        },

        async subscriber(_, {name, email}){
            const newSubscriber = new Subscriber({
                name,
                email
            });

            await newSubscriber.save();
            return "Created Successfully"
        }
    }

   
}

const server = new ApolloServer({typeDefs, resolvers});

export default server
