interface TypeProps {
  params: {
    id: string
  }
}

const getPost = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  return response.json()
}

export const generateMetadata = async ({ params: { id } }: TypeProps) => {
  const post = await getPost(id)
  return {
    title: post.title,
  }
}

const Post = async ({ params: { id } }: TypeProps) => {
  const post = await getPost(id)
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  )
}

export default Post
