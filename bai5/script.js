
import CommentAPI from './commentAPI.js';


const apiCaller = new CommentAPI('http://localhost:3000');

apiCaller.getAll().then(comments => console.log('all comment', comments));
apiCaller.getOne(1).then(comment => console.log('one comment', comment));
// const newComment = { 
// text: "a comment about post 1",
// postId: "1"
//  };
// apiCaller.create(newComment).then(createdComment => console.log('Bình luận mới', createdComment));
// const updatedComment = { text: 'updated' };
// apiCaller.update(3, updatedComment).then(updated => console.log('comment updated:', updated));
// apiCaller.delete(6).then(deletedComment => console.log('comment deleted:', deletedComment));