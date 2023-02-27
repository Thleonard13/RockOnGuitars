import React from 'react'
import BlogPost from './BlogPost'
import Header from '../../components/Header'
import { blogposts } from './BlogPosts'

const Blog = () => {

  const pageClass = "blog"
  const headerText = "#readmore";
  const subHeader = "Learn the newest tips from artists and professionals";

  return (
    <>
      <Header headerText={headerText} subHeader={subHeader} pageClass={pageClass}/>
      <section id="blog">
        {blogposts.map((post) => {
          return (
            <BlogPost key={post.id} post={post} />
        )})}
      </section>
    </>
  )
}

export default Blog