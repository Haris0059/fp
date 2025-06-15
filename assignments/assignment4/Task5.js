// Create a curried function conditionBuilder(field)(operator)(value) that returns an object representing a condition (like you'd use in a filter system or a database query).
// Then, use partial application to fix the field or operator and reuse the function.

const conditionBuilder = (field) => (operator) => (value) => ({field: field, operator: operator, value: value})

const ageEquals = conditionBuilder("age")("=");
console.log(ageEquals(30));
// Output: { field: "age", operator: "=", value: 30 }