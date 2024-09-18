import test from 'node:test'
import assert from 'node:assert'
import { search } from '.'

test('title is valid', async (t) => {
  const posts = await search({ title: '9' })
  assert(posts.every((post) => post.title.includes('9')) && posts.length > 0)
})

test('kind is valid', async (t) => {
  const posts = await search({ kind: 'report' })
  assert(posts.every((post) => post.kind === 'report') && posts.length > 0)
})

test('category is valid', async (t) => {
  const posts = await search({ category: 'Notícia' })
  assert(
    posts.every((post) => post.category.includes('Notícia')) && posts.length > 0
  )
})

test('target is valid', async (t) => {
  const posts = await search({ target: 'Aluno' })
  assert(
    posts.every((post) => post.targets.includes('Aluno')) && posts.length > 0
  )
})

test('publishedAtStart is valid', async (t) => {
  const date = new Date('2024-06-01')
  const posts = await search({ publishedAtStart: date })
  assert(
    posts.every((post) => new Date(post.publishedAt) >= date) &&
      posts.length > 0
  )
})

test('publishedAtEnd is valid', async (t) => {
  const date = new Date('2024-05-20')
  const posts = await search({ publishedAtEnd: date })
  assert(
    posts.every((post) => new Date(post.publishedAt) <= date) &&
      posts.length > 0
  )
})

test('createdAtStart is valid', async (t) => {
  const date = new Date('2023-10-10')
  const posts = await search({ createdAtStart: date })
  assert(
    posts.every((post) => new Date(post.createdAt) >= date) && posts.length > 0
  )
})

test('createdAtEnd is valid', async (t) => {
  const date = new Date('2023-10-20')
  const posts = await search({ createdAtEnd: date })
  assert(
    posts.every((post) => new Date(post.createdAt) <= date) && posts.length > 0
  )
})

test('publishedAtStart and publishedAtEnd are valid', async (t) => {
  const publishedAtStart = new Date('2024-03-01')
  const publishedAtEnd = new Date('2024-04-01')
  const posts = await search({
    publishedAtStart,
    publishedAtEnd,
  })
  assert(
    posts.every(
      (post) =>
        new Date(post.publishedAt) >= publishedAtStart &&
        new Date(post.publishedAt) <= publishedAtEnd
    ) && posts.length > 0
  )
})

test('createdAtStart and createdAtEnd are valid', async (t) => {
  const createdAtStart = new Date('2023-08-01')
  const createdAtEnd = new Date('2023-12-20')
  const posts = await search({
    createdAtStart,
    createdAtEnd,
  })
  assert(
    posts.every(
      (post) =>
        new Date(post.createdAt) >= createdAtStart &&
        new Date(post.createdAt) <= createdAtEnd
    ) && posts.length > 0
  )
})
