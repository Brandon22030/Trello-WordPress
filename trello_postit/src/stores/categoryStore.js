/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
// import { getItemById, getListById, getListByItemId } from "../utils/board";
// import { makeItem, makeList } from "../utils/board";

import router from "@/router";

export const useCategoryStore = defineStore('categoryStore', {

    state: () => ({

        categories: [],

        oneCategory: '',

        onePost: '',

        posts: [],

        bearer: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcG9zdC1pdC5sb2NhbCIsImlhdCI6MTcyMjE5Mzg2NSwibmJmIjoxNzIyMTkzODY1LCJleHAiOjE3MjI3OTg2NjUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.f2dLK8UcLDXsZ6UH2w8Ir6TwH8QSSjrWVEfZVcaDPyM',

        url: 'http://post-it.local/wp-json/wp/v2'

    }),

    getters: {

		getListById: (state) => (listId) => {
		
            return getListById(state.categories, listId);
		
        },
		
        getListByItemId: (state) => (itemId) => {
		
            return getListByItemId(state.categories, itemId);
		
        },
		
        getItemById: (state) => (itemId) => {
		
            return getItemById(state.categories, itemId);
		
        },

    },

    actions: {

        // FETCH ALL CATEGORIES WITH EACH POSTS
        async fetchCategories(){

            try{

                const response = await fetch(`${this.url}/categories`);

                const data = await response.json();

                const categoriesWithPosts = await Promise.all(

                    data.map(async(category) =>{

                        const postsResponse = await fetch(`${this.url}/posts?categories=${category.id}`);

                        const postsData = await postsResponse.json();

                        category.posts = postsData;

                        return category;

                    })

                );

                this.categories = categoriesWithPosts;

            } catch(error){

                console.error('Error fetching categories or posts:', error);

            } 

        },

        // FETCH CATEGORY BY ID
        async fetchCategoryById(categoryId){

            try{

                const response = await fetch(`${this.url}/categories/${categoryId}`);

                const data = await response.json();

                this.oneCategory = await data;

            } catch(error){

                console.error('Error fetching categories or posts:', error);

            } 

        },

        // FETCH POST BY ID
        async fetchPostById(postId){

            try{

                const response = await fetch(`${this.url}/posts/${postId}`);

                const data = await response.json();

                this.onePost = await data;

            } catch(error){

                console.error('Error fetching categories or posts:', error);

            } 

        },

        // ADD CATEGORY
        async createCategory(categoryName){

            try{

                const response = await fetch(`${this.url}/categories`, {

                    method: 'POST',

                    mode: 'cors',

                    credentials: 'include',
                    
                    headers: {

                        'Content-Type': 'application/json',

                        'Authorization': this.bearer

                    },

                    body: JSON.stringify({name: categoryName})

                })

                const newCategory = await response.json();

                newCategory.posts = [];

                this.categories.push(newCategory);

            } catch(error){

                console.error('Error creating category:', error);

            }

        },

        // ADD POST
        async createPost(categoryId, postTitle, postContent){

            try{

                const response = await fetch(`${this.url}/posts`, {

                    method: 'POST',

                    mode: 'cors',

                    credentials: 'include',
                    
                    headers: {

                        'Content-Type': 'application/json',

                        'Authorization': this.bearer

                    },

                    body: JSON.stringify({

                        title: postTitle,

                        content: postContent,

                        status: 'publish',

                        categories: [categoryId]

                    })

                })

                const newPost = await response.json();

                const category = this.categories.find((cat) => cat.id === categoryId);

                if (category) {

                    category.posts.push(newPost);

                }
                
            } catch(error){

                console.error('Error creating post:', error);

            }

        },

        // DELETE POST
        async deletePost(postId, categoryId){

            try{

                await fetch(`${this.url}/posts/${postId}`, {

                    method: 'DELETE',

                    mode: 'cors',

                    credentials: 'include',
                    
                    headers: { 'Authorization': this.bearer }

                })

                this.categories = this.categories.find((cat) => cat.id === categoryId);

            } catch(error){

                console.error('Error deleting post:', error);

            };

            await this.fetchCategories();

        },

        // DELETE CATEGORY
        async deleteCategorie(categoryId){

            try{

                await fetch(`${this.url}/categories/${categoryId}?force=true`, {

                    method: 'DELETE',

                    mode: 'cors',

                    credentials: 'include',
                    
                    headers: { 'Authorization': this.bearer }

                })

                this.categories = this.categories.filter(cat => cat.id === categoryId);

                // router.push('/board')

                // if(category) {

                //     category.posts = category.posts.filter((post) => post.id !== postId);

                // }

            } catch(error){

                console.error('Error deleting post:', error);

            };

            await this.fetchCategories();

        },

        // UPDATE POST
        async updateCard(postId, postTitle, postContent, categoryId){

            try{

                await fetch(`${this.url}/posts/${postId}`, {
                
                    method: 'PUT',
                
                    headers: { 'Content-Type': 'application/json', 'Authorization': this.bearer },
                
                    body: JSON.stringify({

                        id: postId,

                        title: postTitle,

                        content: postContent,

                        status: 'publish'

                    })
                
                });

                this.categories = this.categories.find((cat) => cat.id === categoryId);

                // console.log(categoryId)

            } catch(error) {

                console.error('Error updating post:', error);

            };

            await this.fetchCategories();

        },

        // UPDATE CATEGORY
        async updateCategory(categoryId, categoryName){

            try{
        
                await fetch(`${this.url}/categories/${categoryId}`, {
                        
                    method: 'PUT',
                        
                    headers: { 'Content-Type': 'application/json', 'Authorization': this.bearer },
                        
                    body: JSON.stringify({
        
                        id: categoryId,

                        name: categoryName
                
                    })
                        
                });
        
                this.categories = this.categories.find((cat) => cat.id === categoryId);
        
                        // console.log(categoryId)
        
            } catch(error) {
        
                console.error('Error updating post:', error);
        
            };
        
            await this.fetchCategories();
        
        },

        // UPDATE POST CATEGORY
        async updatePostCategory(postId, newCategoryId){

            try{

                await fetch(`${this.url}/posts/${postId}`, {

                    method: 'PUT',
                        
                    headers: { 'Content-Type': 'application/json', 'Authorization': this.bearer },

                    body: JSON.stringify({

                        categories: [newCategoryId]

                    })

                });

                console.log('Post category updated successfully');

            } catch(error){

                console.error('Error updating post category: ', error);

            };

            await this.fetchCategories();

        },
        

    }

})