const addPosts = (req, resp) => {
    req.store.posts.push(req.body)
    resp.sendStatus(201)
}

const getPosts = (req, resp) => {
    resp.type('application/json')
    resp.send(req.store.posts)
}

const updatePosts = (req, resp) => {
    req.store.posts[req.params.postId] = req.body
    resp.sendStatus(202)
}

const removePosts = (req, resp) => {
    req.store.posts.splice(req.params.postId, 1)
    resp.sendStatus(204)
}

module.exports = {
    addPosts, getPosts, updatePosts, removePosts
}