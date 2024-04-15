import classNames from 'classnames';
import OurServicesImage from './OurServiceImage';

export default function Avatar(props) {
    // return (
    //     <div className={classNames('services-component-container', props.containorClass)}>
    //         <img src={props.src} alt="services-image" className={props.imageClass} />
    //         <p className={props.capClass}>{props.caption}</p>
    //     </div>
        
    // );
    
    return (
        <div className="avatar-container">
            
                <OurServicesImage src={props.src} imageClass={props.imageClass} />
                <p className="avatar-user-name">{props.userName}</p>
                <p className="stars">
                    {props.stars}
                </p>
                <p className="user-comment">
                    {props.userComment}
                </p>
             
        </div>
    );
}

const avatars = [
    {
        src: "./src/assets/a-sm.jpg", 
        userName: "John Leo", 
        stars: '⭐⭐⭐⭐⭐', 
        userComment: "Elit, tellus est, libero euismod. Pellentesque bibendum id sed aenean tellus. Quam egestas pulvinar auctor pellentesque dolor."

    },

    {
        src: "./src/assets/b-sm.jpg", 
        userName: "John Leo", 
        stars: '⭐⭐⭐⭐⭐', 
        userComment: "Elit, tellus est, libero euismod. Pellentesque bibendum id sed aenean tellus. Quam egestas pulvinar auctor pellentesque dolor."

    },

    {
        src: "./src/assets/c-sm.jpg", 
        userName: "John Lie", 
        stars: '⭐⭐⭐⭐', 
        userComment: "Elit, tellus est, libero euismod. Pellentesque bibendum id sed aenean tellus. Quam egestas pulvinar auctor pellentesque dolor."

    }
]

export {avatars};