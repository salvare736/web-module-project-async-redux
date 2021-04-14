import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

import Unit from './Unit';

const UnitList = (props) => {
    const { fetchData } = props;

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='unitContainer'>
            {props.isLoading ? <h3>Loading data...</h3> : null}
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
            {props.units.map(unit => (
                <Unit key={unit.id} name={unit.name} age={unit.age} hitPoints={unit.hit_points} lineOfSight={unit.line_of_sight} attack={unit.attack} range={unit.range} movementRate={unit.movement_rate} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        units: state.units
    };
}

export default connect(mapStateToProps, { fetchData })(UnitList);
