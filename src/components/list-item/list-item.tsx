interface ListProps{
    image: string;
    text: string;
}

function ListItem({...props}: ListProps){
    return(
    <>
    <li id="check"> <img src={props.image} alt="check icon" /> {props.text}</li>
    </>
    )
}

export default ListItem;
