// // Saves options to chrome.storage
// const saveOptions = () => {
//   if (document) {
//     const color = document.getElementById("color")?.value;
//     const likesColor = document.getElementById("like")?.checked;
//   }
//   console.log(color, likesColor);

//   // @ts-ignore
//   chrome.storage.sync.set(
//     { favoriteColor: color, likesColor: likesColor },
//     () => {
//       // Update status to let user know options were saved.
//       const status = document.getElementById("status");
//       status.textContent = "Options saved.";
//       setTimeout(() => {
//         status.textContent = "";
//       }, 750);
//     }
//   );
// };

// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// const restoreOptions = () => {
//   // @ts-ignore
//   chrome.storage.sync.get(
//     { favoriteColor: "red", likesColor: true },
//     (items) => {
//       document.getElementById("color").value = items.favoriteColor;
//       document.getElementById("like").checked = items.likesColor;
//     }
//   );
// };

// document.addEventListener("DOMContentLoaded", restoreOptions);
// document.getElementById("save").addEventListener("click", saveOptions);
