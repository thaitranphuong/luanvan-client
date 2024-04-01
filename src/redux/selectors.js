import { createSelector } from '@reduxjs/toolkit';

// export const searchTextSelector = (state) => state.filters.search;
// export const filterStatusSelector = (state) => state.filters.status;
// export const filterPrioritiesSelector = (state) => state.filters.priorities;
// export const todoListSelector = (state) => state.todoList.todos;

//Selector này phụ thuộc vào dữ liệu của selector khác => sử dụng createSelector()
// export const todoRemainingSelector = createSelector(
//   searchTextSelector,
//   filterStatusSelector,
//   filterPrioritiesSelector,
//   todoListSelector,

//   (searchText, status, priorities, todoList) => {
//     return todoList.filter((todo) => {
//       if (status === "All") {
//         return priorities.length
//           ? todo.name.includes(searchText) && priorities.includes(todo.priority)
//           : todo.name.includes(searchText);
//       } else {
//         return (
//           todo.name.includes(searchText) &&
//           (status === "Completed" ? todo.completed : !todo.completed) &&
//           priorities.includes(todo.priority) &&
//           (priorities.length ? priorities.includes(todo.priority) : true)
//         );
//       }
//     });
//   }
// );
