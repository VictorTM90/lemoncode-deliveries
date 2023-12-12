import { books } from "./data-exemple.js";
console.log("************** DELIVERABLE 04 *********************");
type Book = {
  title : string;
  isRead: boolean;
}
function isBookRead(books : Book[], titleToSearch: string ) :boolean {
  if(!books || !titleToSearch) return
  return books.some(({title, isRead})=> title === titleToSearch && isRead);
}
console.log(isBookRead(books, "Devastación")); 
console.log(isBookRead(books, "Canción de hielo y fuego")); 
console.log(isBookRead(books, "Los Pilares de la Tierra"));
