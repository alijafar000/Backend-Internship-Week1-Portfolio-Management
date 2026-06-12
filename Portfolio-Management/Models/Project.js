import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {type: String},
    description: {type: String},
    technologiesUsed: {type: Array},
    createdAt: {type: Date, default: Date.now}
})

export const Project = mongoose.model('Project', projectSchema)