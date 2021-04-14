import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

const UnitList = (props) => {
    const { fetchData } = props;

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
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
