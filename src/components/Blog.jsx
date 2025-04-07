/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

import Card from "./Card";
import cardData from "../assets/cardData";

const Blog = () => {

  const {blog_articles} = cardData
  console.log(blog_articles);
  
 
  return (
    <>
      <section className="w-full bg-white relative z-40 pb-24">
        <div className="container">
          <div className="headings text-center">
            <h6>our blog</h6>
            <h2 className="mb-2">Recent Articles and News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod.
            </p>
          </div>
          <div className="cards flex mt-6">

          {
            blog_articles.map( (article, index) => (
              <Card key={index} style={'blogCard'} img={article.img} heading={article.title} paragraph={article.description} button={article.button} time={article.date} commentCount={article.comments} name={article.author} />
            ))
          }
        </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
