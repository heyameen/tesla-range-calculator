import TeslaWheels from '../components/TeslaWheels/TeslaWheels';
import { changeWheel } from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    value: state.config.wheels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler:(size) => {
      dispatch(changeWheel(size))
    }
  }
}

const TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels)

export default TeslaWheelsContainer;