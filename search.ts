import { readFileSync } from "fs";

type PostKind = "report" | "gallery" | "video" | "banner" | "informative";

export type Post = {
  id: number;
  title: string;
  kind: PostKind;
  publishedAt: Date;
  createdAt: Date;
  category: string[];
  targets: string[];
};

export type PostFilter = {
  title?: string;
  kind?: PostKind;
  category?: string;
  target?: string;
  publishedAtStart?: Date;
  publishedAtEnd?: Date;
  createdAtStart?: Date;
  createdAtEnd?: Date;
};

export async function search(filter: PostFilter): Promise<Post[]> {
  const posts: Post[] = JSON.parse(readFileSync("./data/posts.json", "utf-8"));

  /********************************************
   *            CODIFIQUE AQUI!
   *    Você deve implementar essa função
   ********************************************/

  let filterPosts = posts;

  if (filter.title) {
    filterPosts = filterPosts.filter((post) => {
      const normalizedPostTitle = post.title.toLowerCase();
      const normalizedSearchTitle = filter.title!.toLocaleLowerCase();

      return normalizedPostTitle.includes(normalizedSearchTitle);
    });
  }

  if (filter.kind) {
    filterPosts = filterPosts.filter((post) => post.kind === filter.kind);
  }

  if (filter.category) {
    filterPosts = filterPosts.filter((post) =>
      post.category.includes(filter.category!)
    );
  }

  if (filter.target) {
    filterPosts = filterPosts.filter((post) =>
      post.targets.includes(filter.target!)
    );
  }

  if (filter.publishedAtStart) {
    filterPosts = filterPosts.filter((post) => {
      const postPublish = new Date(post.publishedAt);
      const filterPublished = new Date(filter.publishedAtStart!);

      return postPublish >= filterPublished;
    });
  }

  if (filter.publishedAtEnd) {
    filterPosts = filterPosts.filter((post) => {
      const postPublish = new Date(post.publishedAt);
      const filterPublished = new Date(filter.publishedAtEnd!);

      return postPublish <= filterPublished;
    });
  }

  if (filter.createdAtStart) {
    filterPosts = filterPosts.filter((post) => {
      const postCreated = new Date(post.createdAt);
      const filterCreated = new Date(filter.createdAtStart!);

      return postCreated >= filterCreated;
    });
  }

  if (filter.createdAtEnd) {
    filterPosts = filterPosts.filter((post) => {
      const postCreated = new Date(post.createdAt);
      const filterCreated = new Date(filter.createdAtEnd!);

      return postCreated <= filterCreated;
    });
  }

  return filterPosts.sort((a, b) => {
    if (a.publishedAt >= b.publishedAt) {
      return -1;
    }

    return 0;
  });
}
