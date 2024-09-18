import { readFileSync } from 'fs'

export type Post = {
  id: number
  title: string
  kind: 'report' | 'gallery' | 'video' | 'banner' | 'informative'
  publishedAt: Date
  createdAt: Date
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

export async function search(filter: PostFilter): Promise<Post[]> {
  const posts: Post[] = JSON.parse(readFileSync('./data/posts.json', 'utf-8'))
  return posts
}

async function main() {
  // Pode mudar os valores para testar
  const filter: PostFilter = {
    title: '9',
    kind: 'report',
    category: 'Notícia',
    target: 'Aluno',
    publishedAtStart: new Date('2024-01-01'),
    publishedAtEnd: new Date('2024-06-20'),
    createdAtStart: new Date('2023-08-01'),
    createdAtEnd: new Date('2023-12-20'),
  }
  console.time('filter')
  const posts = await search(filter)
  console.timeEnd('filter')

  // console.log(posts)
}

main()
