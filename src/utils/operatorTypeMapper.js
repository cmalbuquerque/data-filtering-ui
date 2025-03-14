const operatorTypeMapper = {
  string: ['equals', 'any', 'none', 'in', 'contains'],
  number: ['equals', 'greater_than', 'less_than'],
  enumerated: ['equals', 'any', 'none', 'in']
};

export const getSupportedOperators = (type) => {
  return operatorTypeMapper[type] || [];
};