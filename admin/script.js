// <!-- bookName, bookYear, description, authorName, bookImgUrl, genre, downloadUrl, audioUrl -->

const bookName = document.querySelector('#bookName');
const bookYear = document.querySelector('#bookYear');
const description = document.querySelector('#description');
const authorName = document.querySelector('#authorName');
const bookImgUrl = document.querySelector('#bookImgUrl');
const genre = document.querySelector('#genre');
const downloadUrl = document.querySelector('#downloadUrl');
const audioUrl = document.querySelector('#audioUrl');
// const select =  document.querySelector('#exampleFormControlSelect1');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const container = document.querySelector('.BooksContainer');
const deleteContainer = document.querySelector('.deleteContainer');



const showBooks = (item) =>{
    return(
        `<div class="row">
            <div class="col-lg-3 mt-5 pt-4 ml-2">
                <div class="card mycard" style="width: 280px;height: 700px;">
                    <img class="imgStyle"  src=${item.bookImgUrl} class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${item.bookName}</h6>
                        <p class="card-text myct">${item.description}</p>
                        <a href=${item.downloadUrl} target="_blank" class="btn btn-link mylink">Download</a>
                        <button class="btn btn-danger deleteBtn" data-id=${item._id}>Delete</button>
                    </div>
                </div>
            </div>                
        </div>`
    )       
}
btn.addEventListener('click',() =>{
    fetch('https://tranquil-woodland-54024.herokuapp.com/books')
    .then(response =>{
        if(response.status >= 400){
            return Promise.reject();    
        }
       return response.json()
    })
    .then(res =>{
        let frag = '';
        res.forEach(i=>{
            let card = showBooks(i);
            frag += card;
        })
    }).catch(()=>{
        console.error("Что-то пошло не так");
    })
})

form.addEventListener('submit', e =>{
    e.preventDefault();

    fetch('https://tranquil-woodland-54024.herokuapp.com/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            bookName: bookName.value,
            bookYear: bookYear.value,
            description: description.value,
            authorName: authorName.value,
            bookImgUrl: bookImgUrl.value,
            genre: genre.value,
            downloadUrl: downloadUrl.value,
            audioUrl: audioUrl.value
        })
    }).then(response => response.json())
    .then(res =>{
        console.log(res);
    })
})




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let $email = document.querySelector('#exampleInputEmail1');
let $pass = document.querySelector('#exampleInputPassword1');
let $auth_form = document.querySelector('.auth_form');
let $main = document.querySelector('.main');
let $auth = document.querySelector('.auth');

$auth_form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if($email.value == 'muslimabazarova2@gmail.com' && $pass.value == '20020212'){
        $auth.classList.add('deleted');
        $main.classList.remove('deleted');
        sessionStorage.setItem('userIsConnected','true');
    }else{
        alert('Неверные данные!');
        $auth.classList.remove('deleted');
        $main.classList.add('deleted');
        $email.value = '';
        $pass.value = '';
        sessionStorage.setItem('userIsConnected','false');
    }
})

window.addEventListener('load',() =>{
    if(sessionStorage.getItem('userIsConnected') == 'false'){
        $main.classList.add('deleted');
        $auth.classList.remove('deleted');
    }else if(sessionStorage.getItem('userIsConnected') == 'true'){
        $main.classList.remove('deleted');
        $auth.classList.add('deleted');
    }
})
