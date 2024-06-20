import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    postImg:{
        type: String,
        required: true,
    },
    userImg:{
        type: String,
    },
    content:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
}, {timestamps: true})

export default mongoose.models.Post || mongoose.model("Post", postSchema);