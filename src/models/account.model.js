import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },

        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        dni: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE"
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;