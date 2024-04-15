import classNames from 'classnames';
import TimeStamp from "../components/TimeStamp"; 
import arrow from "../assets/Icon wrap.png"; 

export default function Blog(props) {
    return (
        <div className={classNames("blog-container", props.containerClass)}>
         <img src={props.src} alt="image" className={props.imageClass} />
         <div className="wrap-in-blog">
            <h2 className={classNames("blog-title", props.titleClass)}>{props.title}</h2> 
            <a href={props.link} className={props.linkClass}>
                <img src={arrow} alt="" className="arrow-blog" />
            </a>  
         </div>
         
         <p className="blog-content">
            {props.content}
         </p>
         <TimeStamp />
        </div>
    );
}

const blogs = 
    {
        content: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        mainContent: "Tempor ac lectus tincidunt tincidunt pretium mauris dolor turpis. Diam tellus placerat habitant enim. Vitae pharetra varius ullamcorper augue malesuada cras sapien. Pulvinar tortor duis duis orci sit pellentesque. Volutpat vestibulum tortor feugiat tincidunt et vestibulum quisque leo integer. Lacinia pellentesque erat est lacinia tristique.",
        title: "Blog Title",
        titleOne: "This place is for the title of the blog"
    }

const blogImages = [
    { src: "./src/assets/blog-image-1.png"},
    { src: "./src/assets/blog-image-2.png"},
    { src: "./src/assets/blog-image-3.png"},
    { src: "./src/assets/blog-image-1.png"},
    { src: "./src/assets/blog-image-2.png"},
    { src: "./src/assets/blog-image-3.png"},
    { src: "./src/assets/blog-image-1.png"},
    { src: "./src/assets/blog-image-2.png"},
    { src: "./src/assets/blog-image-3.png"}
]
export {blogs};
export {blogImages};
