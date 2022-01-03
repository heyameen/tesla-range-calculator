import { temperatureDown, temperatureUp } from '../actions'

import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import { connect } from 'react-redux';
import { counterDefaultVal } from '../constants/counterDefaultVal';

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.temperature,
    initValues: counterDefaultVal.temperature
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment:(value) => {
      dispatch(temperatureUp(value))
    },
    decrement:(value) => {
      dispatch(temperatureDown(value))
    }
  }
}

const TeslaTempCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)

export default TeslaTempCounterContainer;