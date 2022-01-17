import {VInjectable} from "vienna-ts";
import {BlogPost} from "../model/blogpost";

@VInjectable({ singleton: true })
export class BlogService {
    private _posts: BlogPost[] = [
        {
            id: '1',
            title: 'Blog A',
            body: 'Something about blog A'
        },
        {
            id: '2',
            title: 'Blog B',
            body: 'Something about blog B'
        }
    ];

    getAll(): BlogPost[] {
        return this._posts;
    }

    getBlogById(id: string): BlogPost | undefined {
        return this._posts.find(p => p.id === id);
    }
}
