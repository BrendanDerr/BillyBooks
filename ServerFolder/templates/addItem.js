function addBook(){
  var ul = document.getElementById("bookList");
  var book = document.getElementById("book");
  var li = document.createElement("li");
  li.setAttribute('id', book.value);
  li.appendChild(document.createTextNode(book.value));
  ul.appendChild(li);
}