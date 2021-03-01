const container = document.querySelector('#container');


const showBooks = (item) =>{
    return(
        `<div class="col-lg-4 mt-5 text-center col-md-6 mb-5">
                <div class="card mycard" style="width: 280px;height: 500px;">
                    <img class="imgStyle"  src=${item.bookImgUrl} class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${item.bookName}</h6>
                        <p>Автор: ${item.authorName}</p>
                        <p>Книжный год: ${item.bookYear}</p>
                        <div class="text-center">
                            <a href=${item.downloadUrl} target="_blank" class="btn btn-danger mb-2 mylink pl-3 pr-3">Download</a>
                            <a href=${item.audioUrl} target="_blank" class="btn btn-success mb-2">Online read</a>
                        </div>
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

