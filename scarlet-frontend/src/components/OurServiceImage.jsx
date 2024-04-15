import classNames from 'classnames';

export default function OurServicesImage(props) {
    return (
        <div className={classNames('services-component-container', props.containorClass)}>
            <img src={props.src} alt="services-image" className={props.imageClass} />
            <p className={props.capClass}>{props.caption}</p>
        </div>
        
    );
}

export const servicesImages = [
    {
        src: "./src/assets/Rectangle 334.png",
        caption: "Aluminum Gutters"
    },
    {
        src: "./src/assets/Rectangle 336.png",
        caption: "Built-in Gutters"
    },
    {
        src: "./src/assets/Rectangle 338.png",
        caption: "Metal Fascia Covers"
    },
    {
        src: "./src/assets/Rectangle 340.png",
        caption: "Leaf Guards"
    },
    {
        src: "./src/assets/Rectangle 343.png",
        caption: "Skylights & Chimneys Repairs"
    },
    {
        src: "./src/assets/Rectangle 344.png",
        caption: "Roofing"
    },
];

