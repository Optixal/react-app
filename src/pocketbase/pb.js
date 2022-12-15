import PocketBase from 'pocketbase'

export const pb = new PocketBase('http://127.0.0.1:8090')

export async function auth(email, password) {
  return await pb.collection('users').authWithPassword(email, password)
}

export async function listPosts() {
  return await pb.collection('posts').getFullList(200)
}

export async function updatePost(post) {
  return await pb.collection('posts').update(post.id, post)
}
