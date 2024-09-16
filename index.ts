import { readFileSync } from 'fs'

export type Post = {
  id: number
  title: string
  kind: 'report' | 'gallery' | 'video' | 'banner' | 'informative'
  publishedAt: Date
  createdAt: Date
  createdBy: string
  category: string[]
  targets: string[]
}

export type PostFilter = {
  title?: string
  kind?: 'report' | 'gallery' | 'video' | 'banner' | 'informative'
  category?: string
  target?: string
  publishedAtStart?: Date
  publishedAtEnd?: Date
  createdAtStart?: Date
  createdAtEnd?: Date
}

const posts: Post[] = JSON.parse(readFileSync('posts.json', 'utf-8'))

async function search(filter: PostFilter): Promise<Post[]> {
  // ...
  return []
}

async function main() {
  // Pode mudar os valores para testar
  const posts = await search({
    title: 'Post 1',
    kind: 'report',
    category: 'Notícia',
    target: 'Aluno',
    publishedAtStart: new Date('2024-01-01'),
    publishedAtEnd: new Date('2024-01-02'),
    createdAtStart: new Date('2023-08-01'),
    createdAtEnd: new Date('2023-08-02'),
  })

  console.log(posts)
}

main()
