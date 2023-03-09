import "../styles/Day.css";

export default function Day(props) {
    //takes a number as a prop

    return <div className="day">{props.date.getDate()}</div>;
}
