$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});





// [
//     {
//         id: 1,
//         title: 'Booker Prize 2020',
//         desc: "Scotland's Douglas Stuart has won the 2020 Booker Prize for his first published novel, Shuggie Bain, which draws from his own experience growing up in 1980s Glasgow.",
//         link: 'https://www.euronews.com/2020/11/19/booker-prize-2020-one-thing-we-can-still-do-in-the-pandemic-is-read',
//         imgUrl: 'imgUrl',
//         day: 18,
//         month: 'October'
//     },
//     {
//         id: 2,
//         title: 'Booker Prize 2020',
//         desc: "Scotland's Douglas Stuart has won the 2020 Booker Prize for his first published novel, Shuggie Bain, which draws from his own experience growing up in 1980s Glasgow.",
//         link: 'https://www.euronews.com/2020/11/19/booker-prize-2020-one-thing-we-can-still-do-in-the-pandemic-is-read',
//         imgUrl: 'imgUrl',
//         day: 18,
//         month: 'October'
//     }
// ]


// Authors

const container = document.querySelector('#authorsContainer');

const authorsList = [
    {
        name: 'Chinghiz Aitmatov',
        desc: 'He was born to a Kyrgyz father and Tatar mother.',
        link: 'https://en.wikipedia.org/wiki/Chinghiz_Aitmatov',
        img: '../img/330px-Tschingis_Ajtmatow.jpg'
    },
    {
        name: 'Abdulla Qodiriy',
        desc: 'Qodiriy was one of the most influential Uzbek writers.',
        link: 'https://en.wikipedia.org/wiki/Abdulla_Qodiriy',
        img: '../img/30fb55cc5f8c0edc1b5aaa26e855a880.jpeg'
    },
    {
        name: 'Tohir Malik',
        desc: 'Tohir Malik was an Uzbek novelist and story writer.',
        link: 'https://en.wikipedia.org/wiki/Tohir_Malik',
        img: '../img/malik-tahir.jpg'
    },
    {
        name: 'Chulpan',
        desc: "Chulpan Uzbek poet, playwright, novelist, and literary translator.",
        link: 'https://en.wikipedia.org/wiki/Cho%CA%BBlpon',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7hZSOy1UnKfM0JDyDn0TxpvgBNqlrJ3cFw&usqp=CAU'
    },
    {
        name: 'Usmon Nosir',
        desc: 'Usmon Nosir was an Uzbek poet.',
        link: 'https://en.wikipedia.org/wiki/Usmon_Nosir',
        img: 'https://ziyouz.uz/ru/images/stories/usmonnosir.jpg'
    },
    {
        name: 'Muhammad Sadik Muhammad Yusuf',
        desc: 'He was Muslim scholar.',
        link: 'https://en.wikipedia.org/wiki/Muhammad_Sadik_Muhammad_Yusuf',
        img: 'https://cdn.beta.qalampir.uz/uploads/H7/f_iQAaccynIEFVwFCqwNcnJtqM6ExYb4.jpg'
    },
    {
        name: 'Utkir Hoshimov ',
        desc: 'He was well-known Uzbek writer and public figure.',
        link: 'https://www.savol-javob.com/en/o%CA%BBtkir-hoshimov-1941-2013/',
        img: 'https://i.pinimg.com/236x/ab/3f/25/ab3f252bb7a344fbebda6ccb0300ce1d.jpg'
    },
    {
        name: 'Erkin Vohidov ',
        desc: 'Uzbek poet, playwright, literary translator, and statesman',
        link: 'https://peoplepill.com/people/erkin-vohidov',
        img: 'data:image/jpeg;base64,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'
    }

]


const showAuthors = () =>{
    let frag = ""
    authorsList.forEach(item =>{
        let card = `
            <div class="col-lg-4 mt-5 col-md-6 col-xl-3">
                <div class="card mycard" style="width: 260px;height: 350px;">
                    <img class="author1"  src=${item.img} class="card-img-top">
                    <div class="card-body">
                    <h6 class="card-title">${item.name}</h6>
                    <p class="card-text myct">${item.desc}</p>
                    <a href=${item.link} target="_blank" class="btn btn-link mylink">More</a>
                    </div>
                </div>
            </div>
        `
        frag += card;
    })
    container.innerHTML = frag;
}

showAuthors();