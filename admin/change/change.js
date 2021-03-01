const container = document.querySelector('.changeContainer');
const btn = document.querySelector('.myLink');
const handleEdit = document.querySelector('#handleEdit');


const showBooks = (item) =>{
    return(
        `<div class="col-lg-4 col-xl-3 col-md-6 col-sm-6  mt-5 pt-4">
                <div class="card mycard" style="width: 250px;height: 450px;">
                    <img class="imgStyle"  src=${item.bookImgUrl} class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${item.bookName}</h6>
                        <button onclick="setId('${item._id}')" type="button" data-toggle="modal" data-target="#modal1" class="btn btn-primary mb-2 changeBtn" data-id=${item._id}>Change</button>
                        <a href=${item.downloadUrl} target="_blank" class="btn btn-success mb-2 mylink pl-3 pr-3">Download</a>
                        <button class="btn btn-danger deleteBtn" data-id=${item._id}>Delete</button>
                        <a href=${item.audioUrl} target="_blank" class="btn btn-info">Online read</a>
                    </div>
                </div>
            </div>         
        `
    )       
}

function setId(id){
    handleEdit.dataset.id = id;
};


handleEdit.addEventListener('click', e =>{
    e.preventDefault();
    const BOOK_ID = handleEdit.dataset.id;
    fetch(`https://tranquil-woodland-54024.herokuapp.com/books/${BOOK_ID}`,{
        method: 'PATCH',
        body: JSON.stringify({
            bookName: bookName.value,
            bookYear: bookYear.value,
            description: description.value,
            authorName: authorName.value,
            bookImgUrl: bookImgUrl.value,
            genre: genre.value,
            downloadUrl: downloadUrl.value,
            audioUrl: audioUrl.value
        }),
        headers: {
        'Content-type' : 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(res =>{
        window.location.reload();
    })
})

window.addEventListener('load',() =>{
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
        container.innerHTML = frag;
    }).catch(()=>{
        console.error("Что-то пошло не так");
    })
})


function deleteBooks(id){
    fetch(`https://tranquil-woodland-54024.herokuapp.com/books/${id}` ,{
           method:"DELETE",
       })
       .then(res =>res.json())
       .then(r => {
           console.log(r)
       })
}    


// Delete book

container.addEventListener('click', e =>{
    e.preventDefault();

    if(e.target.classList.contains('deleteBtn')){
        const ask = confirm('Вы действительно хотите удалить данную книгу')

        if(ask){
            deleteBooks(e.target.dataset.id);
            // window.location.reload();
        }else{
            return
        }
    }
})


function changeBooks(id) {
    fetch(`https://tranquil-woodland-54024.herokuapp.com/books/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            bookName: bookName.body.value,
            bookYear: bookYear.body.value,
            description: description.body.value,
            authorName: authorName.body.value,
            bookImgUrl: bookImgUrl.body.value,
            genre: genre.body.value,
            downloadUrl: downloadUrl.body.value,
            audioUrl: audioUrl.body.value
        }),
        headers: {
        'Content-type' : 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(res =>{
        console.log(res);
    })
}

