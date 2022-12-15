import { useMutation, useQueryClient } from '@tanstack/react-query'
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

// Delete is pretty neat
export async function deletePost(post) {
  return await pb.collection('posts').delete(post.id)
}

export const useDeleteTodo = basePosts => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: todo => {
      return deletePost(todo)
    },
    onSuccess: (data, variables, context) => {
      const nextPosts = basePosts.filter(post => post.id !== variables.id)
      queryClient.setQueryData(['posts'], nextPosts)
    },
  })
}
