import classNames from 'classnames';

export default function Header(props) {
    return (
        <div className={classNames('head', props.headClass)}>
            <p>{props.black} <span className='head-span'>{props.red}</span></p>
          </div>
    );
}