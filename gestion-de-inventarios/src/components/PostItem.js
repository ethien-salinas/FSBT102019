import React from 'react'

const PostItem = (props) => {
  const { title, desc } = props.data
  return (
    <>
      <h3>{title}</h3>
      <p>{desc}</p>
    </>
  )
}

export default PostItem