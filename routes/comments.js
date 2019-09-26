const addComments = (req, resp) => {
    req.store.posts[req.params.postId].comments.push(req.body)
    resp.sendStatus(201)
}

const getComments = (req, resp) => {
    resp.type('application/json')
    resp.send(req.store.posts[req.params.postId].comments)
}

const updateComments = (req, resp) => {
    req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
    resp.sendStatus(202)
}

const removeComments = (req, resp) => {
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    resp.sendStatus(204)
}

module.exports = {
    addComments, getComments, updateComments, removeComments
}