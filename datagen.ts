import { Post } from '.'
import { writeFile } from 'fs/promises'

async function generateData() {
  const posts: Post[] = []
  const possibleKinds = ['report', 'gallery', 'video', 'banner', 'informative']
  const possibleCategories = [
    'Notícia',
    'Prova',
    'Tarefa',
    'Avaliação',
    'Material',
  ]
  const possibleTargets = [
    'Aluno',
    'Professor',
    'Coordenador',
    'Diretor',
    'Pais',
  ]
  const publishedAtDateRange = {
    start: new Date('2024-01-01'),
    end: new Date('2024-06-20'),
  }
  const createdAtDateRange = {
    start: new Date('2023-08-01'),
    end: new Date('2023-12-20'),
  }

  for (let i = 0; i < 10000; i++) {
    const post: Post = {
      id: i + 1,
      title: `Post ${i + 1}`,
      kind: possibleKinds[
        Math.floor(Math.random() * possibleKinds.length)
      ] as any,
      publishedAt: new Date(
        publishedAtDateRange.start.getTime() +
          Math.random() *
            (publishedAtDateRange.end.getTime() -
              publishedAtDateRange.start.getTime())
      ),
      createdAt: new Date(
        createdAtDateRange.start.getTime() +
          Math.random() *
            (createdAtDateRange.end.getTime() -
              createdAtDateRange.start.getTime())
      ),
      createdBy: `User ${Math.floor(Math.random() * 10)}`,
      category: [
        possibleCategories[
          Math.floor(Math.random() * possibleCategories.length)
        ],
      ],
      targets: [
        possibleTargets[Math.floor(Math.random() * possibleTargets.length)],
      ],
    }
    posts.push(post)
  }
  await writeFile('./data/posts.json', JSON.stringify(posts, null, 2))
}

generateData()
