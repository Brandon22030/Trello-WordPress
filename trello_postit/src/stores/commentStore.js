/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'

export const useCommentairesStore = defineStore('commentaires', {
  state: () => ({
    posts: [],

    comment: [],

    bearer: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcG9zdC1pdC5sb2NhbCIsImlhdCI6MTcyMjE5Mzg2NSwibmJmIjoxNzIyMTkzODY1LCJleHAiOjE3MjI3OTg2NjUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.f2dLK8UcLDXsZ6UH2w8Ir6TwH8QSSjrWVEfZVcaDPyM',

    url: 'http://post-it.local/wp-json/wp/v2'    
    
  }),
  actions: {
    async fetchPosts() {
      const response = await fetch(`${this.url}/posts`)

      const data = await response.json()

      console.log(data)

      const postWithComments = await Promise.all(
        data.map(async (post) => {
          const commentsResponse = await fetch(
            `${this.url}/comments?post=${post.id}`
          )

          const commentsData = await commentsResponse.json()

          console.log(commentsData)

          post.comments = commentsData

          return post
        })
      )

      this.posts = postWithComments
    },

    async fetchPost(postId) {

      const commentsResponse = await fetch(
        `${this.url}/comments?post=${postId}`
      )

      const commentsData = await commentsResponse.json()

      // console.log(commentsData)
      this.comment = await commentsData;
    
      console.log(this.comment)

    },

    async createComment(postId, newComment) {
      console.log(postId)
      const header = {
        'Content-Type': 'application/json',
        Authorization: this.bearer
      }
  
      const response = await fetch(`${this.url}/comments`, {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ post: postId, content: newComment })
      })
      const createdComment = await response.json()

      const comment = this.posts.find(com => com.id === postId);
      if (comment) {
        comment.comments.push(createdComment);
      }
      this.comment.push(createdComment);
    },

    async updateComment(id, comment, postId) {
      const header = {
        'Content-Type': 'application/json',
        Authorization: this.bearer
      }
      const response = await fetch(`${this.url}/comments/${id}`, {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({id: id, content: comment })
      })
      
      // this.post = await response.json()

      
      // const fresh = this.posts.find((com) => com.id === id)
      // if (fresh) {
      //   fresh.freshs.push(this.push)
      // }
      this.fetchPost(postId)
    },

    async deleteComment(commentId, postId) {
        const header = {
        'Content-Type': 'application/json',
        Authorization: this.bearer
      }

      try {
        const response = await fetch(`${this.url}/comments/${commentId}`, {
          method: 'DELETE',
          headers: header
        })

        if (!response.ok) {
          throw new Error('Erreur de suppression')
        }

        const post = this.posts.find((post) => post.id === postId)
        if (post) {
          post.comments = post.comments.filter((comment) => comment.id !== commentId)
        }
      } catch (error) {
        console.error('Error', error)
      };

      this.fetchPost(postId)

    }
  },
  getters: {
    getComments() {
      return this.comments
    }
  },
  mutations: {
    setComments(comments) {
      this.comments = comments
    }
  }
})
