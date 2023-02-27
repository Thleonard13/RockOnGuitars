import React from 'react'

const BlogPost = (props) => {
    const { title, description, image, datePublished } = props.post;
  return (
    <div className="blog-box">
            <div className="blog-img">
                <img src={require("./" + image)}/>
            </div>
            <div className="blog-details">
                <h4>{title}</h4>
                <p>{description}</p>
                <a href="#">CONTINUE READING</a>
                <h1>{datePublished}</h1>
            </div>
        </div>
  )
}

export default BlogPost