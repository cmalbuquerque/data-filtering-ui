# Data Filtering UI

This project is a data filtering user interface built with React. It allows users to filter data based on selected properties, operators, and values, and displays the filtered data in a table.


![Data Filtering UI](./demo/demo.gif)

## Key Features

- 🔍 **Dynamic Filtering**: Users can filter data based on selected properties, operators, and values.
- 📊 **Dynamic Table Columns**: The table is built dynamically based on the properties existing in the datastore, meaning the number of columns is dynamic.
- 🧹 **Clear Filters**: Users can clear all filters and reset the data table to its original state.
- ✅ **Unit Tests**: The application includes unit tests to ensure the filtering logic works correctly.


## Purpose

The purpose of this application is to provide a dynamic and interactive way to filter and display data. Users can select a property, choose an operator, and specify a value to filter the data accordingly.

## Key Features

- 🔍 **Dynamic Filtering**: Users can filter data based on selected properties, operators, and values.
- 📊 **Dynamic Table Columns**: The table is built dynamically based on the properties existing in the datastore, meaning the number of columns is dynamic.
- 🧹 **Clear Filters**: Users can clear all filters and reset the data table to its original state.
- ✅ **Unit Tests**: The application includes unit tests to ensure the filtering logic works correctly.



## Running the Project for the First Time

To run the project for the first time, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/cmalbuquerque/data-filtering-ui.git
    cd data-filtering-ui
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the application**:
    ```sh
    npm start
    ```

4. **Access the application**:
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.



### Running tests

### `npm test`


Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Process of Building the UI


The process of building the UI involved several steps, as documented in the commit messages. Here is an overview of the key steps:

1. **Initial Setup**:
    - Repository creation
    - Bootstrapped the project with Create React App.
    - Set up the basic structure of the React application.

2. **Adding mock datastore file**:
    - Added the file provided with mocked data

3. **Creating components and fetching data**:
    - Created the reusable `SelectDropdown` component to handle property, operator, and value selection.
    - Created an custom react hook to fetch the properties, operators and product data from file.
    - Get operator values based on properties selected and based on products content in order to only display values included in datastore.
    - Populate property, operator and value selection dropdowns with the fetched data
    - Created the reusable `Datatable` component to display the data.
    - Render `Datatable` with properties values as data table headers and raw products data fetched via `useDataStore` hook.

4. **Implementing Clear Filters**:
    - Added a "Clear Filters" button to reset all filters and restore the original data.
    - Updated the state management to handle filter clearing.

5. **Implementing Filtering Functionality**:
    - Created a mapper between properties types and supported filtering operations.
    - Create `filterUtils` to handle with data filtering based on property type. 
    - Filter products data passed to data table based on selected filter.

6. **Refactoring and Optimization**:
    - Refactored the code to improve readability and maintainability.
    - Adjust CSS
    - Optimized the filtering logic and fix some issues detected
    - Updated the README file to provide clear instructions and documentation.


Unit tests and some functional tests were added during the development of components and utils.