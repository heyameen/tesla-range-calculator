import './TeslaWheels.css';

import PropTypes from 'prop-types';
import React from 'react';

const LabelLists = ({value, handleChangeWheels}) => {
//   const value = props.wheels.value;
//   const changeHandler = handleChangeWheels;
  const sizes = [19, 21];
  const LabelItems = sizes.map(size => (
    <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
      <input
        type="radio"
        name="wheelsize"
        value={size}
        checked={value === size} 
        onChange={() => {handleChangeWheels(size)}} />
      <p>
        {size}
      </p>
    </label> 
    )
  );
  return (
    <div>
      {LabelItems}
    </div>
  );
}
const TeslaWheels = ({value, changeHandler}) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <LabelLists value={value} handleChangeWheels={changeHandler}/>
    </div>
  </div>
);
TeslaWheels.propTypes = {
  value: PropTypes.number,
  handleChangeWheels: PropTypes.func
}
export default TeslaWheels;