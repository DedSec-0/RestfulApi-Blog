const express = require('express')
const  bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const ip = require('ip');
const app = express()
const { posts, comments } = require('./routes')

let store = {
  posts: [{
    name: "",
    url: "",
    text: "",
    comments: [{
      text: ""
    }]
  }]
}

app.use(bodyParser.json(), logger('dev'), errorHandler())
app.use((req, resp, next) => {
  req.store = store
  next()
})

//Posts
app.get('/posts', (req, resp) => {
  posts.getPosts(req, resp)
})
app.post('/posts', (req, resp) => {
  posts.addPosts(req, resp)
})
app.put('/posts/:postId', (req, resp) => {
  posts.updatePosts(req, resp)
})
app.delete('/posts/:postId', (req, resp) => {
  posts.removePosts(req, resp)
})

//comments
app.get('/posts/:postId/comments', (req, resp) => {
  comments.getComments(req, resp)
})
app.post('/posts/:postId/comments', (req, resp) => {
  comments.addComments(req, resp)
})
app.put('/posts/:postId/comments/:commentId', (req, resp) => {
  comments.updateComments(req, resp)
})
app.delete('/posts/:postId/comments/:commentId', (req, resp) => {
  comments.removeComments(req, resp)
})

app.listen(3000 , () => console.log(`Server started at ${ip.address()}:${3000}`));