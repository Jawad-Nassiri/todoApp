// function showTodos() {
//   todosContainer.innerHTML = "";

//   todos.forEach(function (todo) {
//     todosContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//         <article class="todo">
//           <div class="todo-data">
//             <div class="checkbox">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="size-4"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m4.5 12.75 6 6 9-13.5"
//                   />
//                 </svg>
//               </span>
//             </div>
//             <div>
//               <p class="todo-title">${todo.title}</p>
//             </div>
//           </div>

//           <div class="todo-buttons">
//             <button class="delete">حذف</button>
//             <div class="relative">
//               <button class="status">وضعیت</button>
//               <ui class="status-menu">
//                 <li value="default">معمولی</li>
//                 <li value="important">مهم</li>
//                 <li value="very-important">خیلی مهم</li>
//               </ui>
//             </div>
//             <button class="complete">تکمیل</button>
//           </div>
//         </article>
//       `
//     );
//   });
// }