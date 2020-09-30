// non-destructive
const updateObjectWithKeyAndValue = (obj, key, value) => {
  return Object.assign({}, obj, {[key]: value})
}

// destructive
const destructivelyUpdateObjectWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

const 
