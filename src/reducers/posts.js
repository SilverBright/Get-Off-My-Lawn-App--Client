// create state and action type for posts

export default (state = [], action) => {
  switch (action.type) {
    // fetch posts action creator
    case "SUCCESSFUL_POSTS_FETCH":
      return action.posts

      default:
        return state
  }
}