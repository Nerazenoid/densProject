import TimeItem from "./timeItem";

const TimePicker = (props) => {
    let times = props.times
    console.log(times)

    const List = Object.entries(times).map(([key, value]) => {
        return (
            <div>{key}:Значение {value.toString()} </div>
        )
    })
    return (
        <div className="items">
            список элементов
            <TimeItem />
            {List}
        </div>
    );
}

export default TimePicker;