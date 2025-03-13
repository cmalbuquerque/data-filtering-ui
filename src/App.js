import './App.css';
import SelectDropdown from './components/select-dropdown/SelectDropdown';
import FormControl from '@mui/material/FormControl';

const App = () => {

const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div className="App">
      <FormControl fullWidth>
        <SelectDropdown className="property-selection" placeholder="Select a property" listItems={listItems} />
      </FormControl>
      
    </div>
  );
}

export default App;
