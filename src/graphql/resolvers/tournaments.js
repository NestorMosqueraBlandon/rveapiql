import Post from "../../models/Post.js"
import Subscriber from "../../models/Subscriber.js";

export default  {
    Query:{
         async posts(_, {} ) {
            const posts = await Post.find({}).sort({createdAt: -1});
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