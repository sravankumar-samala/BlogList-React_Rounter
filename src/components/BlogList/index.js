// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsArray} = props

  return (
    <ul className="blogs-container">
      {blogsArray.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogItem={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
