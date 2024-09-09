import mongoose, {Schema, Document} from 'mongoose'


export interface Message extends Document{
    _id: string;
    content: string,
    createdAt: Date
}

const MessageSchem: Schema<Message> = new Schema({
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptingMessage:boolean,
    messages: Message[]
}
const userSchem: Schema<User> = new Schema({
    username: {type: String, required: [true, "Username is required"], unique: true},
    email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            "Please use a valid email"
        ]
    },
    password: {type: String, required: [true, "Password is required"]},
    verifyCode: {type: String, required: [true, "verifiedCode is required"]},
    verifyCodeExpiry: {type: Date, required: [true, "verifiedCodeExpiry is required"]},
    isAcceptingMessage: {type: Boolean, default: true},
    isVerified:{type: Boolean, default: false},
    messages: [MessageSchem]
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", userSchem)
export default UserModel;