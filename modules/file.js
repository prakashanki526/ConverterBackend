const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const fileSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        data:{
            type: Object,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    }
);

module.exports = model("file", fileSchema);