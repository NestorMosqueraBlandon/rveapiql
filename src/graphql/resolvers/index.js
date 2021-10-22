import usersResolvers from "./users.js"
import postsResolvers from "./posts.js"

export default {
  Query: {
    ...usersResolvers.Query,
    ...postsResolvers.Query
  },

  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation
  }
}
