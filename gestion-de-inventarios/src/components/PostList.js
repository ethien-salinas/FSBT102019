import React from 'react'
import PostItem from './PostItem'


const PostList = (props) => {
  return (
    <>
      {
        props.data.map((item) => {
          return <PostItem key={item.id} data={item} />
        })
      }
    </>
  )
}

export default PostList