import './button.css'

interface ButtonProps {
    text: string;
    onClick: () => void;
  }

function Button({...props}: ButtonProps){
    return (
        <>
        <button onClick={props.onClick}>{props.text}</button>
        </>
    )
}

export default Button;