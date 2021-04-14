function Unit(props) {
    const { name, age, hitPoints, lineOfSight, attack, range, movementRate } = props;

    return (
        <div className='unitData'>
            <p>{name}</p>
        </div>
    );
}

export default Unit;
