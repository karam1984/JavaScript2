document.querySelector('body').style.fontFamily = "Arial, sans-serif";
let nickNameSpan = document.getElementById('nickname');
nickNameSpan.replaceWith('karam');

let favFoodSpan = document.getElementById('fav-food');
favFoodSpan.replaceWith('pasta');
let homeTownSpan = document.getElementById('hometown');
homeTownSpan.replaceWith('Syria');

let list = document.querySelector('ul').children;
for (var i=0; i<list.length; i++){
    list[i].setAttribute("class", "list-item");
}

const Image = document.createElement('img');
       Image.src ="https://avatars3.githubusercontent.com/u/58743749?s=400&u=7899cd8aed703b5d17727c529bbe3d21ec2d5c2a&v=4";
        document.body.appendChild(Image);



  