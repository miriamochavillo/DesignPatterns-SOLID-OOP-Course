//Only displays the CRUD Functionalities of a Blog Post
class BlogPost {
  title: string;
  content: string;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
createPost(){};
updatePost(){};
deletePost(){};

//Only displays the Blog Post
class BlogPostDisplay{
    constructor(public blogPost: BlogPost){}
    displayHTML(){
        return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    };
}
