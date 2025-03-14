import React, {useEffect, useState} from 'react';
import './App.css';
import SelectDropdown from './components/select-dropdown/SelectDropdown';
import './data/datastore';
import Button from '@mui/material/Button';
import Datatable from './components/datatable/Datatable';
import useDataStore from './hooks/useDataStore';
import { getSupportedOperators } from './utils/operatorTypeMapper';

const App = () => {
  const { properties, operators, products, rawProducts } = useDataStore();
  const [selectedProperty, setSelectedProperty] = useState(undefined);
  const [selectedOperator, setSelectedOperator] = useState(undefined);
  const [operatorValues, setOperatorValues] = useState([]);
  const [filteredOperators, setFilteredOperators] = useState(operators);
  const [selectedOperatorValue, setSelectedOperatorValue] = useState(undefined);

  const clearFilters = () => {
    selectedOperator && setSelectedOperator(undefined);
    selectedProperty && setSelectedProperty(undefined);
    selectedOperatorValue && setSelectedOperatorValue(undefined);
    setFilteredOperators(operators);
  };

  useEffect(() => {
    if(selectedProperty) {
      const supportedOperatorIds = getSupportedOperators(selectedProperty.type);
      const filteredOperators = operators.filter(operator => supportedOperatorIds.includes(operator.id));      
      setFilteredOperators(filteredOperators);
      const propertyId = selectedProperty.id;
      const matchingValues = rawProducts
        .flatMap(product => product.property_values)
        .filter(propertyValue => propertyValue.property_id === propertyId)
        .map(propertyValue => ({  
          name: propertyValue.value,
          id: propertyValue.propertyId}));
        
      const uniqueValues = Array.from(new Map(matchingValues.map(item => [item.name, item])).values());
      setOperatorValues(uniqueValues);
    } else {
      setOperatorValues([]);
    }
  }, [selectedProperty, products, operators, rawProducts]);

  return (
    <div className="App">
        <div className="filter-container">
          <div className="filter-section">
            <SelectDropdown className="property-selection" placeholder="Select property" listItems={properties} setSelected={setSelectedProperty} selected={selectedProperty}/>
            <SelectDropdown className="operator-selection" placeholder="Select operator" listItems={filteredOperators} setSelected={setSelectedOperator} selected={selectedOperator}/>
            {selectedProperty && selectedOperator && <SelectDropdown className="operator-type-selection" placeholder="" listItems={operatorValues} setSelected={setSelectedOperatorValue} selected={selectedOperatorValue}/>}
          </div>
          <Button variant="contained" onClick={clearFilters}>Clear Filters</Button>
        </div>
        <Datatable headers={properties} data={products} />
    </div>
  );
}

export default App;
