import classNames from 'classnames';

export default function Button(props) {
    return (
        <button className={classNames('button', props.colors, props.class)}>
            Get A Quote
        </button>
    );
}