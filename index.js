async function getUsersList() {
    let usersResponse = await fetch ('https://jsonplaceholder.typicode.com/users')
    let postsResponse = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let users = await usersResponse.json()
    let posts = await postsResponse.json()

    users = users.map((user) => {
        return element = {
            id: user.id,
            name: user.name,
            email: user.email,
            adress: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
            website: `https://${user.website}`,
            company: user.company.name,
            posts:  createPostsList(user.id, posts)
          }
    })

    console.log(users)
}

  function createPostsList(userId, posts) {
    return posts.filter(post => userId === post.userId).map(post => {
      return {
        id: post.id,
        title: post.title,
        title_crop: `${post.title.substring(0,20)}...`,
        body: post.body
      }
    })
  }

  getUsersList()