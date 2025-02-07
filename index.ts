import { PostFilter, search } from "./search";

async function main() {
  // Você pode essa função à vontade também pra testar!
  const filter: PostFilter = {
    // title: "9990",
    // kind: "informative",
    // category: "Notícia",
    // target: "Aluno",
    // publishedAtStart: new Date("2024-06-06"),
    // publishedAtEnd: new Date("2024-06-07"),
    // createdAtStart: new Date("2023-11-24"),
    // createdAtEnd: new Date("2023-12-18"),
  };

  console.time("filter");
  const posts = await search(filter);
  console.timeEnd("filter");

  console.table(posts);
}
main();
