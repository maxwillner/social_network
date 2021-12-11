const { Schema, model } = require("mongoose");


const UserSchema = new Schema (
    {
        userName: {
            type: String,
            unique: true,
            required: "You need to provide a user name!",
            trim: true 
        }, 
        email: {
            type: String,
            unique: true,
            required: "You need to provide an email!",
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "You need to provide a valid email"]

        }, 
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false 
    }
);

// get total count of friends on retrieval    //
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model("User", UserSchema);

module.exports = User;