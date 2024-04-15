import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Blog, {blogs, blogImages} from "../components/Blog";
import cover from "../assets/blog-cover-image.png"
import Footer from "../components/Footer";
import "./Blogs.css"

export default function Blogs() {
    return (
      <>
        
        <div className="padded">
          <Navbar />
          <Blog
            src={cover}
            title={blogs.title}
            content={blogs.mainContent}
            link="#"
          /> 
          <div className="blog-grid">
          {blogImages.map((image, index) => (
                <Blog key={index} src={image.src} title={blogs.title} content={blogs.content} link="#" />
              ))}
          </div>

        </div>
        <Footer />
      </>
      
    );
  }
  

  