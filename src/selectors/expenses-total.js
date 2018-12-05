
export default (expensses) => {
    return expensses
    .map((expensse) => expensse.amount)
    .reduce((sum, value) => sum + value, 0);
}