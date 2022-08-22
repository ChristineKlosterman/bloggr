export class Project {
    constructor(data) {
        this.id = data.id || ''
        this.coverImg = data.coverImg || ''
        this.projectImgs = data.projectImgs || []
        this.title = data.title || ''
        this.creatorId = data.creatorId || ''
        this.creator = data.creator || {}
        this.createdAt = data.createdAt || ''
        this.updatedAt = data.updatedAt || ''
    }
}