import { useState, useEffect } from 'react';
import { parseProperties, parseOperators } from '../utils/parsers';

const useDataStore = () => {
  const [properties, setProperties] = useState([]);
  const [operators, setOperators] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (window.datastore) {
      let propertiesData = [];

      if (window.datastore.getProperties) {
        propertiesData = window.datastore.getProperties();
        setProperties(parseProperties(propertiesData));
      }

      if (window.datastore.getOperators) {
        const operatorsData = window.datastore.getOperators();
        setOperators(parseOperators(operatorsData));
      }

      if (window.datastore.getProducts) {
        const productsData = window.datastore.getProducts();
        const mappedProducts = productsData.map(product => {
          const productRow = {};
          product.property_values.forEach(propertyValue => {
            const property = parseProperties(propertiesData).find(p => p.id === propertyValue.property_id);
            if (property) {
              productRow[property.name] = propertyValue.value;
            }
          });
          return productRow;
        });
        setProducts(mappedProducts);
      }
    }
  }, []);

  return { properties, operators, products };
};

export default useDataStore;