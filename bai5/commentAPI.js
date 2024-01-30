import APICaller from "./CallAPI";

class CommentAPI extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = 'comments';
    }

    async getAll() {
        const comments = await this.get(this.endpoint);
        return comments;
    }

    async getOne(commentId) {
        const comment = await this.get(`${this.endpoint}/${commentId}`);
        return comment;
    }

    async create(comment) {
        const newComment = await axios.post(`${this.baseUrl}/${this.endpoint}`, comment);
        return newComment.data;
    }

    async update(commentId, updatedComment) {
        const updated = await axios.put(`${this.baseUrl}/${this.endpoint}/${commentId}`, updatedComment);
        return updated.data;
    }

    async delete(commentId) {
        const deletedComment = await axios.delete(`${this.baseUrl}/${this.endpoint}/${commentId}`);
        return deletedComment.data;
    }
}

export default CommentAPI;