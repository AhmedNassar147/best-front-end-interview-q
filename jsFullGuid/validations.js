const isEmpty = (value) => !value ? 'please fill the field' : undefined;
const isNumber = (value) => value || !isNaN(value) ? 'it should be numeric value' : undefined;

const maxLength = value => max => {
  if (value && max && value.length < max) {
    return undefined
  } else {
    return `please the length should be less thant ${max}`
  }
}

console.log(isEmpty("aa"))
console.log(isNumber("2"))
console.log(maxLength("aasasas")(4))