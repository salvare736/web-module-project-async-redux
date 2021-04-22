function Unit(props) {
    const { name, age, hitPoints, lineOfSight, attack, range, movementRate } = props;

    return (
        <div className='unitData'>
            <h3>{name}</h3>
            <p>Phase:&nbsp;&nbsp; {age}</p>
            <p>Hit Points:&nbsp;&nbsp; {hitPoints}</p>
            <p>Line of Sight:&nbsp;&nbsp; {lineOfSight}</p>
            <p>Attack Power:&nbsp;&nbsp; {attack ? attack : `0`}</p>
            <p>Attack Range:&nbsp;&nbsp; {range ? range : `1`}</p>
            <p>Movement Rate:&nbsp;&nbsp; {movementRate}</p>
        </div>
    );
}

export default Unit;
