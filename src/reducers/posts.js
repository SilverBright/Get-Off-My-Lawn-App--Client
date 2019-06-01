export default (state = [], action) => {
  switch (action.type) {
    case "SUCCESSFUL_POSTS_FETCH":
      return action.posts

      default:
        return state
  }
}