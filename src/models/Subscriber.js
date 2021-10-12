import mongoose  from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
},
{
    versionKey: false,
    timestamps: true,
}
)

postSchema.pre("validate", function(next) {
    if(this.title){
        this.slug = slugify(this.title, {lower:true, strict: true})
    }

    if(this.markdown){
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }

    next()
})

const Subscriber = mongoose.model('Subscriber', subscriberchema);
export default Post;