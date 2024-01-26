




class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        const data = await response.json();
        return data;
    }
}

class CommentAPI extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = 'comments';
    }

    async getAll() {
        const comments = await this.get(this.endpoint);
        return comments;
    }

    async getOne(cmId) {
        const comment = await this.get(`${this.endpoint}/${cmId}`);
        return comment;
    }
}


const apiCaller = new CommentAPI('http://localhost:3000');
apiCaller.getAll().then(comments => console.log('tat ca comment', comments));
apiCaller.getOne(1).then(comment => console.log('1 comment', comment));