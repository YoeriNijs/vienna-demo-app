import {VInjectable} from "vienna-ts";
import {BlogPost} from "../model/blogpost";

@VInjectable({ singleton: true })
export class BlogService {
    private _posts: BlogPost[] = [
        {
            id: '1',
            title: 'Donec facilisis dui vitae feugiat fermentum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis dui vitae feugiat fermentum. Maecenas nec sapien pharetra purus rutrum finibus et vel nibh. Pellentesque auctor nibh dolor, vel tincidunt arcu fringilla sit amet. Sed id diam turpis. Cras neque ligula, tincidunt quis eros at, vehicula tincidunt nisl. Morbi auctor sem feugiat magna condimentum efficitur. Fusce sodales, mi et finibus sagittis, augue diam ullamcorper dui, a iaculis felis sem vitae elit. Sed arcu risus, dignissim nec risus eget, gravida auctor tellus. Vivamus eget diam consectetur, pulvinar ligula eu, ultrices purus. Quisque viverra vitae lectus vitae vehicula. Curabitur pretium nisl a ex sodales porta. Ut malesuada sagittis ligula et ultrices. Praesent vel pulvinar sapien. Integer eu iaculis est.\n' +
                '\n' +
                'Nam aliquet ipsum justo, at ornare diam dignissim in. Morbi finibus nibh vitae lacus ultricies, in sodales velit euismod. Aliquam feugiat suscipit justo at condimentum. Sed ultricies est id aliquam egestas. Cras eleifend dolor at nisl volutpat aliquet. Morbi tristique suscipit tellus at hendrerit. Sed sapien odio, condimentum a pulvinar id, ultrices ut turpis. Integer ac mollis mi. Nulla faucibus, ante eget tincidunt rhoncus, risus nulla facilisis risus, id mollis lectus nunc dictum elit. Proin vestibulum nunc in elit pretium, id accumsan felis laoreet. Morbi accumsan, odio quis laoreet gravida, turpis arcu hendrerit ligula, ac euismod eros turpis nec sapien.\n' +
                '\n' +
                'Quisque euismod tellus in dolor commodo ultricies. Proin neque quam, elementum in enim in, dignissim scelerisque augue. In at lacus et nisl placerat molestie. Sed ac elementum nibh. Vivamus ullamcorper quis sem et finibus. Mauris egestas mi vitae ipsum vestibulum laoreet. Pellentesque sed ex accumsan, semper elit nec, aliquet velit. Vivamus a purus leo. Sed rhoncus vel nisi in tristique. Morbi ornare mi id arcu finibus, nec laoreet lectus rhoncus. Donec mattis magna consectetur, convallis augue ac, ultricies augue.'
        },
        {
            id: '2',
            title: 'Nunc a urna quis urna venenatis vulputate',
            body: 'Duis commodo libero eget purus feugiat condimentum. Nullam imperdiet nunc eget lobortis porttitor. Curabitur vitae sagittis tellus, ultrices vulputate ex. Nam rhoncus ex et ex placerat porttitor dignissim non magna. Aenean vitae placerat purus, eu feugiat orci. Nam vitae tincidunt diam. Nullam id congue sapien. Proin at elit vel purus scelerisque finibus. Ut a massa eu sem mollis commodo. Integer congue turpis sapien, eu euismod elit pharetra a. Pellentesque in est in nisi rhoncus condimentum. Fusce lacinia congue ultricies.\n' +
                '\n' +
                'Nunc a urna quis urna venenatis vulputate. Phasellus fringilla enim vel lacus ullamcorper blandit. Curabitur non ante eget mi tempus lacinia. Sed tempus scelerisque justo et tempus. Phasellus eu massa nisi. Etiam a urna nec magna facilisis scelerisque vitae rhoncus mi. Quisque pulvinar, ipsum eu sagittis dapibus, odio dolor pretium odio, et consequat massa elit sit amet ex. Proin eu urna est. Proin commodo hendrerit orci, ut ultrices mi lobortis ac. Ut et ex viverra dolor cursus malesuada. Praesent condimentum rutrum fringilla. Quisque eleifend felis dolor, sed mattis ante tincidunt nec. Duis augue diam, porttitor sed tellus sit amet, facilisis venenatis quam. Cras ornare mauris enim, nec mollis nulla ultricies vel.'
        }
    ];

    getAll(): BlogPost[] {
        return this._posts.reverse(); // Newest first
    }

    getBlogById(id: string): BlogPost | undefined {
        return this._posts.find(p => p.id === id);
    }

    add(title: string, body: string): void {
        const id = `${this._posts.length + 1}`;
        this._posts.push({ id, title, body });
    }
}
