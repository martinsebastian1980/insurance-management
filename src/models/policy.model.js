import mongoose from "mongoose";

const policySchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },

        accountId: {
            type: String,
            required: true
        },

        insuranceType: {
            type: String,
            required: true,
            trim: true
        },

        company: {
            type: String,
            required: true,
            trim: true
        },

        policyNumber: {
            type: String,
            required: true,
            trim: true
        },

        premium: {
            type: String,
            required: true
        },

        startDate: {
            type: String,
            required: true
        },

        endDate: {
            type: String,
            required: true
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

const Policy = mongoose.model("Policy", policySchema);

export default Policy;