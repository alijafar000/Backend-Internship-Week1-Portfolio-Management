import { Project } from "../Models/Project.js";

//add new project
export const addProject = async (req, res) => {
    const { projectName, description, technologiesUsed } = req.body;

    if (projectName == "" || description == "" || technologiesUsed == "") return res.json({
        message: "All fields are required...",
        success: false
    })

    let project = await Project.findOne({ projectName });

    if (project) return res.json({
        message: "Project already added...",
        success: false
    })

    let savedProject = await Project.create({
        projectName, description, technologiesUsed, user: req.user
    })
    res.json({
        message: "Project add successfully...",
        savedProject,
        success: true
    })
}

//get all project
export const getAllProject = async (req, res) => {
    const userProject = await Project.find();

    if (!userProject) return res.json({
        message: "No project exists...",
        success: false
    })

    res.json({ message: "All project fetched...", userProject, success: true })
}

//get project by id
export const getProjectById = async (req, res) => {
    const id = req.params.id;

    const userProject = await Project.findById(id);
    if (!userProject) return res.json({ message: "No project exists...", success: false })

    res.json({ message: "Project Fetched", userProject, success: true })
}

//update project 
export const updateProject = async (req, res) => {
    const id = req.params.id;

    const { projectName, description, technologiesUsed } = req.body;

    let updatedProject = await Project.findByIdAndUpdate(id, {
        projectName,
        description,
        technologiesUsed
    }, { new: true });

    if (!updatedProject) return res.json({
        message: "No project exists...",
        success: false
    })

    res.json({
        message: "Project update successfully...",
        updatedProject,
        success: true
    })
}

//delete project
export const deleteProject = async (req, res) => {
    const id = req.params.id;

    let deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) return res.json({
        message: "No project exists...",
        success: false
    })
    res.json({
        message: "Project delete successfully...",
        success: true
    })
}