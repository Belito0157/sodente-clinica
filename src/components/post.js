import {useState, useEffect} from 'react';
import sanityClient from '../client'
import { Link } from 'react-router-dom';


export default function Post() {
  
  const [postData, setPost] = useState(null);



  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
     }`)
     .then((data) => setPost(data))
     .catch(console.error);
  },[]);



  return (
    <main>
      <section>
        <h1>Blog Post page</h1>
        <h2>Welcome to my page</h2>
        <div>
          { postData && postData.map((post, index) => (
          <article>
            <Link to={"/post/" +post.slug.current} key={post.slug.current}>
            <span key={index}>
              <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
              <span>
                <h3>{post.title}</h3>
              </span>
            </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </main>
  );
}

