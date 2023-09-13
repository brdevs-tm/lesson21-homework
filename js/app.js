const showUsersBtn = document.querySelector(".show__users");
const usersRow = document.querySelector(".users__row");
const usersTable = document.querySelector(".users__table");

document.addEventListener("DOMContentLoaded", () => {
  showUsersBtn.addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    showUsersBtn.classList.add("d-none");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((user) => {
          usersTable.innerHTML += `
            <tbody>
              <tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.username}</td>
              </tr>
            </tbody>`;
        });
      })
      .catch((err) => {
        usersTable.innerHTML = `Error: ${err}`;
      });
  });
});

// data.forEach((user) => {
//   usersRow.innerHTML += `<table class="table">
//             <tbody>
//               <tr>
//                 <th scope="row">${user.id}</th>
//                 <td>${user.name}</td>
//                 <td>${user.username}</td>
//               </tr>
//             </tbody>
//           </table>`;
// });
