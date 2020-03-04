const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    link:'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
},
{
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    link:'https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/0/1/4/1001004011834109.jpg'
},
{
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    link:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_pragmatic_programmer.jpg/220px-The_pragmatic_programmer.jpg"
}

];
const ul = document.createElement('ul')
const h2 = document.createElement('h2');
h2.innerText= 'books list';
document.body.appendChild(h2);

for(book of books){
    const li=document.createElement('li');
    const p = document.createElement('p');
    p.innerText=`${book.title} - ${book.author}`;
    
    const img = document.createElement('img');
    img.src =book.link;
 
    
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
    if(book.alreadyRead===true){
        li.style.backgroundColor = 'green';
       }else{
        li.style.backgroundColor = 'red';
       }
    
}
document.body.appendChild(ul);
      