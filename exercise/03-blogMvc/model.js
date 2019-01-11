const mongodb = require('mongodb')
const M = module.exports = {post: {}}

M.start = async function(){
  M.client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/')
  M.db = M.client.db('blog_test')
  M.posts = M.db.collection('posts')
  M.posts.createIndex({ post: 1 })
}

M.stop = async function () {
  await M.client.close()
}

M.add = async function (post) {
  post.created_at = new Date()
  let result = await M.posts.insertOne(post)
  return result.insertedId != null
}

M.list =async function () {
  let posts = await M.posts.find({}).sort({created_at:-1}).toArray()
  return posts
}

M.read = async function (id) {
   post = await M.posts.findOne({_id: mongodb.ObjectId(id)})
  return post
}
