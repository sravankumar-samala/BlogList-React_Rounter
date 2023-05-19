// Write your JS code here
// {
//     id: 5,
//     title: 'My fifth post',
//     description: 'A high quality solution beautifully designed for startups',
//     publishedDate: 'Nov 10th',
//   },
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-item">
      <div className="blog-item-header">
        <h2>{title}</h2>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
