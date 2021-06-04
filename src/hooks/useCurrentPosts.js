const useCurrentPosts = (posts, postsPerPage, currentPage) => {

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return [ currentPosts ]
}

export default useCurrentPosts