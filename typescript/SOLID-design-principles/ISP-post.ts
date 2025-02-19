interface PostCreator {
  createPost(post: string): void;
}
interface CommentCreator {
  commentPost(comment: Comment): void;
}
interface ShareCreator {
  sharePost(post: string): void;
}

class Admin implements PostCreator, CommentCreator, ShareCreator {
  commentPost(comment: Comment): void {
    console.log("Admin commented on a comment: ", comment);
  }
  sharePost(post: string): void {
    console.log("Admin shared a post: ", post);
  }
  createPost(post: string): void {
    console.log("Admin created a post: ", post);
  }
}

class RegularUser implements ShareCreator, CommentCreator {
  sharePost(post: string): void {
    console.log("Regular commented on a post: ", post);
  }
  commentPost(comment: Comment): void {
    console.log("Regular created a comment: ", comment);
  }
}
