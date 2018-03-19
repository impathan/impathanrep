import {Post} from '../../models/post/post.model'
import {Component, OnInit} from "@angular/core"
import {PostService} from '../../services/post.service';

@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/post/listing.html"
})
export class PostListingComponent implements OnInit {

    posts : Post[];

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.getPosts();
    }

    getPosts(): void {
        this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
      }
    
      delete(post: Post): void {
        this.posts = this.posts.filter(h => h !== post);
        this.postService.deletePost(post).subscribe();
      }
    
}