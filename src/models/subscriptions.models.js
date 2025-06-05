import mongoose, {mongo, Schema} from "mongoose";


const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // jo kr rha h subs
        ref:"User"
    },
    channel: {
        type: Schema.Types.ObjectId, // jo kr rha h subs
        ref:"User"
    },
})

export const Subscription = mongoose.model("Subscription")