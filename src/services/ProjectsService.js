import { AppState } from "../AppState.js";
import { Project } from "../models/Project.js";
import { api } from "./AxiosService.js";

class ProjectsService {

    async getProjects() {
        const res = await api.get('api/blogs')
        AppState.projects = res.data.map(p => new Project(p))
    }

    async getProjectsByCreatorId(creatorId) {
        const res = await api.get('api/blogs', {
            params: {
                creatorId
            }
        })
        AppState.profileProjects = res.data.map(p => new Project(p))
    }

    async createProject(projectData) {
        const res = await api.post('/api/blogs', projectData)
        AppState.projects.unshift(new Project(res.data))
    }

    async editProject(projectData) {
        const res = await api.put(`api/blogs/${projectData.id}`, projectData)

        const index = AppState.projects.findIndex(p => p.id == projectData.id)

        AppState.projects.splice(index, 1, new Project(res.data))

    }


    async deleteProject(projectId) {
        const res = await api.delete(`api/blogs/${projectId}`)
        AppState.projects = AppState.projects.filter(p => p.id != projectId)
    }

}


export const projectsService = new ProjectsService()