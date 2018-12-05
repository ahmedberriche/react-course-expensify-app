import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// test('should return 0 if no expenses', ()=>{
//     const hhh = selectExpensesTotal([]);
//     expect(hhh).toBe(0);
// });
test('should return total expenses', ()=>{
    const hhh = selectExpensesTotal(expenses);
    expect(hhh).toBe(114195);
});