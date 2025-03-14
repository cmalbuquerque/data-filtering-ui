const parseProperties = (properties) => {
  return properties.map(property => ({
    id: property.id,
    name: property.name,
    type: property.type,
  }));
};

const parseOperators = (operators) => {
  return operators.map(operator => ({
    id: operator.id,
    name: operator.text,
  }));
};

export {parseProperties, parseOperators};