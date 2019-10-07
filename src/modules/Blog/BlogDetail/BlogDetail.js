import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { selectBlogById, selectAllBlogs } from '../BlogSelector';
import { getBlogById, getBlogs, } from '../BlogAction';
export default function BlogDetail(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [blogId, setBlogId] = useState(null)
  const { data, isLoading } = useSelector(selectBlogById)
  const blogList = useSelector(selectAllBlogs).data
  debugger

  useEffect(() => {
    setBlogId(id)
    dispatch(getBlogs())
  }, [])
  useEffect(() => {
    dispatch(getBlogById(blogId))
  }, [blogId])
  if (!data) return null
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.3rem' }}>

        <Button
          color='primary'
          disabled={blogId > blogList.length || blogId == 1}
          variant="contained"
          onClick={() => {
            setBlogId(Number(blogId) - 1)
            props.history.push(`/blog/${Number(blogId) - 1}`)
          }}>prev</Button>&nbsp;
      <Button
          color='primary'
          disabled={blogId == blogList.length || blogId < 0}
          variant="contained"
          onClick={() => {
            setBlogId(Number(blogId) + 1)
            props.history.push(`/blog/${Number(blogId) + 1}`)
          }}>Next</Button>
      </div>
      <h2>Blog Detail component</h2>
      <p>ID: {data.id}</p>
      <p>TITLE: {data.title}</p>
      <p>DESCRIPTION: {data.description}</p>
    </div>
  )
}
