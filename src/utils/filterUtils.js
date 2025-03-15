export const getSupportedOperators = (type) => {
  const operatorTypeMapper = {
    string: ['equals', 'any', 'none', 'in', 'contains'],
    number: ['equals', 'greater_than', 'less_than'],
    enumerated: ['equals', 'any', 'none', 'in']
  };
  return operatorTypeMapper[type] || [];
};

export const applyFilter = (products, selectedProperty, selectedOperator, selectedOperatorValue) => {
  if (!selectedProperty || !selectedOperator || !selectedOperatorValue) {
    return products;
  }

  switch (selectedOperator.id) {
    case 'equals':
      return products.filter(product => 
        product[selectedProperty.name] === selectedOperatorValue.name
      );
    case 'contains':
      return products.filter(product => 
        product[selectedProperty.name].includes(selectedOperatorValue.name)
      );
    case 'greater_than':
      return products.filter(product => 
        product[selectedProperty.name] > selectedOperatorValue.name
      );
    case 'less_than':
      return products.filter(product => 
        product[selectedProperty.name] < selectedOperatorValue.name
      );
    case 'in':
      return products.filter(product => 
        selectedOperatorValue.name.includes(product[selectedProperty.name])
      );
    case 'none':
      return products.filter(product => 
        !selectedOperatorValue.name.includes(product[selectedProperty.name])
      );
    case 'any':
      return products.filter(product => 
        selectedOperatorValue.name.some(value => value === product[selectedProperty.name])
      );
    default:
      return products;
  }
};