// let notes = JSON.parse(localStorage.getItem("notes")) || [];

// function saveNotes() {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }

// function addNote(title, content) {
//   if (!title.trim() && !content.trim()) return;  // validation
//   notes.push({ id: Date.now(), title, content });
//   saveNotes();
//   renderNotes();
// }

// function deleteNote(id) {
//   notes = notes.filter(n => n.id !== id);
//   saveNotes();
//   renderNotes();
// }

// function renderNotes() {
//   const list = document.querySelector("#notes-list");
//   list.innerHTML = "";
//   notes.forEach(n => {
//     const div = document.createElement("div");
//     div.className = "note";
//     div.innerHTML = `<h3></h3><p></p><button data-id="${n.id}">Delete</button>`;
//     div.querySelector("h3").textContent = n.title;   // textContent = XSS se safe
//     div.querySelector("p").textContent = n.content;
//     list.appendChild(div);
//   });
// }

// // Event delegation
// document.querySelector("#notes-list").addEventListener("click", (e) => {
//   if (e.target.dataset.id) deleteNote(Number(e.target.dataset.id));
// });

// renderNotes(); // page load par

//practics baby practics 
// function findMax(arr) {
//   if(arr.length === 0) return null;
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++){
//      if(arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log(findMax([3,5,6,8,9]))

function hasDuplicate(arr){
  const seen = new Set();
  for(const x of arr) {
    if (seen.has(x)) {
      return true;
    }
     seen.add(x);
  }
  return false;   
}
console.log(hasDuplicate([1, 2, 3, 4]));

console.log(hasDuplicate([1, 2, 3, 1]));