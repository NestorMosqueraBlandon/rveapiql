import usersResolvers from "./users.js"
import postsResolvers from "./posts.js"
import computersResolvers from "./computers.js"

export default {
  Query: {
    ...usersResolvers.Query,
    ...postsResolvers.Query,
    ...computersResolvers.Query,

  },

  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation
  }
}
