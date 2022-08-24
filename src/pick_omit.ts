interface Post {
    readonly id: number;
    title: string;
    body: string;
    data?: Date;
    slug?: string;
    likes: number;
    views: number;
}

type PostPreview = Pick<Post, "id" | "title">;

const post: PostPreview = {
    id: 1,
    title: "Hello World",
};

const post2: Omit<Post, "body"> = {
    id: 2,
    title: "Hello World",
    data: new Date(),
    likes: 0,
    views: 0,
};
