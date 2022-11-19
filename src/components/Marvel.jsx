import './Marvel.css';

function Marvel(props) {
    return (
        <div className="marvel-card">
            <div className="name">{props.name}</div>
            <div className="Universe"><b>Вселенная:</b> {props.Universe} </div>
            <div className="alter_ego"><b>Альтер эго:</b> {props.alter_ego} </div>
            <div className="who"><b>Род деятельности:</b> {props.who} </div>
            <div className="friends"><b>Друзья:</b> {props.friends} </div>
            <div className="power"><b>Суперсилы:</b> {props.power} </div>
            <img className="marvel_photo" src={props.photo} />
            <div className="description"><b>Подробнее:</b> {props.description} </div>
        </div>
    );
}

export default Marvel;