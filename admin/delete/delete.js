const container = document.querySelector('.deleteContainer');


const showBooks = (item) =>{
    return(
        `<div class="col-lg-3  col-xl-3 col-md-6 col-sm-6 mt-5 pt-4">
                <div class="card mycard" style="width: 250px;height: 450px;">
                    <img class="imgStyle"  src=${item.bookImgUrl} class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${item.bookName}</h6>
                        <button type="button" class="btn btn-primary mb-2 pl-3 pr-3" data-toggle="modal" data-target="#exampleModal">More</button>
                        <a href=${item.downloadUrl} target="_blank" class="btn btn-success mb-2 mylink pl-3 pr-3">Download</a>
                        <button class="btn btn-danger deleteBtn" data-id=${item._id}>Delete</button>
                        <a href=${item.audioUrl} target="_blank" class="btn btn-info">Online read</a>
                    </div>
                </div>
            </div>            
        `
    )       
}
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

// <p class="card-text myct">${item.description}</p>