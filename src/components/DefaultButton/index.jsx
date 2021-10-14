import './style.css';

const DefaultButton = (props) => {
    return(
        <button className="btt-container" onClick={props.action} style={{width: props.width}}>
            {props.text}
        </button>
    )
}

export default DefaultButton;