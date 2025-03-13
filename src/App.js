import React, {useState, useEffect} from 'react';
import './App.css';
import SelectDropdown from './components/select-dropdown/SelectDropdown';
import './data/datastore';
import {parseProperties, parseOperators} from './utils/parsers';
import Button from '@mui/material/Button';

const App = () => {

  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(undefined);
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState(undefined);
  const [operatorTypes, setOperatorTypes] = useState([]);
  const [selectedOperatorType, setSelectedOperatorType] = useState(undefined);

  const clearFilters = () => {
    selectedOperator && setSelectedOperator(undefined);
    selectedProperty && setSelectedProperty(undefined);
    selectedOperatorType && setSelectedOperatorType(undefined);
  }

  useEffect(() => {
  if (window.datastore) {
        if (window.datastore.getProperties) {
          const propertiesData = window.datastore.getProperties();
          setProperties(parseProperties(propertiesData));
        }

        if (window.datastore.getOperators) {
          const operatorsData = window.datastore.getOperators();
          setOperators(parseOperators(operatorsData));
        }
      }
  }, []);

  return (
    <div className="App">
        <div className="filter-container">
          <div className="filter-section">
            <SelectDropdown className="property-selection" placeholder="Select property" listItems={properties} setSelected={setSelectedProperty} selected={selectedProperty}/>
            <SelectDropdown className="operator-selection" placeholder="Select operator" listItems={operators} setSelected={setSelectedOperator} selected={selectedOperator}/>
            {operatorTypes.length > 0 && <SelectDropdown className="operator-type-selection" placeholder="" listItems={[operatorTypes]} setSelected={setSelectedProperty} selected={selectedOperator}/>}
          </div>
          <Button variant="contained" onClick={clearFilters}>Clear Filters</Button>
        </div>
    </div>
  );
}

export default App;
