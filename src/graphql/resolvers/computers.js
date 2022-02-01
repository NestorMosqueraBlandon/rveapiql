import Computer from "../../models/Computer.js"
import Subscriber from "../../models/Subscriber.js";

export default  {
    Query:{
         async computers(_, {} ) {
            const computers = await Computer.find({}).sort({createdAt: -1});
            return computers;
        },
        async getComputer(_, {slug} ) {
            const post = await Computer.find({slug: slug});
            return post;
        },
    },
}