import React, {useState, useEffect} from 'react';
import './App.css';
import SelectDropdown from './components/select-dropdown/SelectDropdown';
import './data/datastore';
import {parseProperties, parseOperators} from './utils/dataParser';

const App = () => {

  const [properties, setProperties] = useState([]);
  const [operators, setOperators] = useState([]);
  const [operatorTypes, setOperatorTypes] = useState([]);

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
        <SelectDropdown className="property-selection" placeholder="Select property" listItems={properties} />
        <SelectDropdown className="operator-selection" placeholder="Select operator" listItems={operators} />
        {operatorTypes.length > 0 && <SelectDropdown className="operator-type-selection" placeholder="" listItems={[operatorTypes]} />}    
    </div>
  );
}

export default App;
