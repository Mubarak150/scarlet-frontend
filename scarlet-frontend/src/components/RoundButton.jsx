import classNames from 'classnames';

// <path> classes: 'black-round' and 'white-round' ... responsible for color of arrow
// <button> background classes: "red" and "black" ... responsible for button color
// align === rotation.. class 'rotate-180'

export default function Button(props) {
    return (
        <button className={classNames('round-button', props.colors, props.align)}>
            <a href='#'>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={props.arrowColor} fill-rule="evenodd" clip-rule="evenodd" d="M0.0357666 8.28373C0.0357666 8.05858 0.125207 7.84265 0.284411 7.68345C0.443615 7.52424 0.659542 7.4348 0.884691 7.4348H20.9074L15.5643 2.09337C15.4049 1.93396 15.3153 1.71776 15.3153 1.49233C15.3153 1.2669 15.4049 1.0507 15.5643 0.891292C15.7237 0.731887 15.9399 0.642334 16.1653 0.642334C16.3908 0.642334 16.607 0.731887 16.7664 0.891292L23.5578 7.68269C23.6368 7.76155 23.6996 7.85523 23.7423 7.95836C23.7851 8.0615 23.8072 8.17207 23.8072 8.28373C23.8072 8.39539 23.7851 8.50596 23.7423 8.60909C23.6996 8.71223 23.6368 8.80591 23.5578 8.88477L16.7664 15.6762C16.607 15.8356 16.3908 15.9251 16.1653 15.9251C15.9399 15.9251 15.7237 15.8356 15.5643 15.6762C15.4049 15.5168 15.3153 15.3006 15.3153 15.0751C15.3153 14.8497 15.4049 14.6335 15.5643 14.4741L20.9074 9.13265H0.884691C0.659542 9.13265 0.443615 9.04321 0.284411 8.88401C0.125207 8.7248 0.0357666 8.50888 0.0357666 8.28373Z" fill="white"/>
                </svg>
            </a>
        </button>
    );
}