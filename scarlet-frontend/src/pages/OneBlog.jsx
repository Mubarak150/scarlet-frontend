import Blog, {blogs, blogImages} from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import coverOne from "../assets/Image (4).png"
import image1 from "../assets/blog-image-1.png"
import image2 from "../assets/blog-image-2.png"
import image3 from "../assets/blog-image-3.png"
import "./Blogs.css";


export default function OneBlog () {

    const blogImagesRelated = [
        { src: "../assets/blog-image-1.png"},
        { src: "../assets/blog-image-2.png"},
        { src: "../assets/blog-image-3.png"},
        { src: "../assets/blog-image-1.png"},
        { src: "../assets/blog-image-2.png"},
        { src: "../assets/blog-image-3.png"},
        { src: "../assets/blog-image-1.png"},
        { src: "../assets/blog-image-2.png"},
        { src: "../assets/blog-image-3.png"}
    ]

    return (
        <>
            
            <div className="padded">
              <Navbar /> 
              <Blog
                    src={coverOne}
                    imageClass="order-3"
                    title={blogs.titleOne}
                    link="#"
                />
                <div className="contents-main-container">
                    <div className="single-blog-contents">
                        <h4 className="sub-heading" >Sub Heading:</h4>
                        <p className="blog-content blog-content-p">
                        
                        Arcu tempus molestie vel euismod cursus consectetur. Mauris consectetur euismod placerat pharetra id et. Urna ipsum placerat fames pharetra aliquam. Et tincidunt nisi eget pellentesque velit lectus fringilla. Lacus faucibus est nisl sodales venenatis viverra faucibus ullamcorper condimentum. Penatibus dui sollicitudin risus in est augue sed consectetur egestas. Ut urna pulvinar metus ipsum porttitor et morbi mi arcu. Euismod sed lacus tortor dui. Pretium porta lectus velit aliquet a mauris aliquet commodo. Vitae et nisi dictum erat iaculis. Odio id neque suspendisse eros convallis. Justo egestas interdum neque aenean nec.
                        </p>
                        <p className="blog-content blog-content-p">
                        Arcu tempus molestie vel euismod cursus consectetur. Mauris consectetur euismod placerat pharetra id et. Urna ipsum placerat fames pharetra aliquam. Et tincidunt nisi eget pellentesque velit lectus fringilla. Lacus faucibus est nisl sodales venenatis viverra faucibus ullamcorper condimentum. Penatibus dui sollicitudin risus in est augue sed consectetur egestas. Ut urna pulvinar metus ipsum porttitor et morbi mi arcu. Euismod sed lacus tortor dui. Pretium porta lectus velit aliquet a mauris aliquet commodo. Vitae et nisi dictum erat iaculis. Odio id neque suspendisse eros convallis. Justo egestas interdum neque aenean nec.
                        </p>
                        <p className="blog-content blog-content-p">
                        Arcu tempus molestie vel euismod cursus consectetur. Mauris consectetur euismod placerat pharetra id et. Urna ipsum placerat fames pharetra aliquam. Et tincidunt nisi eget pellentesque velit lectus fringilla. Lacus faucibus est nisl sodales venenatis viverra faucibus ullamcorper condimentum. Penatibus dui sollicitudin risus in est augue sed consectetur egestas. Ut urna pulvinar metus ipsum porttitor et morbi mi arcu. Euismod sed lacus tortor dui. Pretium porta lectus velit aliquet a mauris aliquet commodo. Vitae et nisi dictum erat iaculis. Odio id neque suspendisse eros convallis. Justo egestas interdum neque aenean nec.
                        </p>
                    </div> 
                    <div className="related">
                        <p className="related-head">Related</p>
                        {blogImages.slice(0,3).map((image, index) => (
                            <Blog key={index} containerClass="related-blog" src={image.src} imageClass="related-image" title={blogs.title} content={blogs.content} link="#" />
                        ))}
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

