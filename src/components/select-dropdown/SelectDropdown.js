import React, {useState} from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';

const SelectDropdown = (props) => {

  const {listItems, placeholder, setSelected} = props;

  const [selectedItem, setSelectedItem] = useState(undefined);

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
    setSelected && setSelected(event.target.value);
  };

  return (
    <>
    <InputLabel className="label">{placeholder}</InputLabel>
    <Select
      className='select-dropdown'
      value={selectedItem}
      label={placeholder}
      onChange={handleChange}
      style={{width: '300px'}}
      >
        {listItems && listItems.map((item, index) => {
          return <MenuItem key={index} value={item}>{item}</MenuItem>
        })}
    </Select>
  </>);

};

SelectDropdown.propTypes = {
  listItems: PropTypes.array,
  placeholder: PropTypes.string,
  setSelected: PropTypes.func,
};

SelectDropdown.defaultProps = {
  listItems: [],
  placeholder: 'Select an item',
  setSelected: () => {},
};

export default SelectDropdown;