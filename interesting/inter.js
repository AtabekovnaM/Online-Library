const fucts = document.querySelector('.fucts_block');

const fuctsList = [
    {
        name: "The Library of Alexandria, Greatest Library of the Ancient World",
        disc: "The Ancient Library of Alexandria, located in Alexandria, Egypt, was one of the largest libraries of the ancient world.",
        img: "https://blog.anypromo.com/wp-content/uploads/2017/08/ruins-300x199.jpeg",
        href:"https://en.wikipedia.org/wiki/Library_of_Alexandria"
    },
    {
        name: "The Library of Congress, Greatest Library of the Modern World",
        disc: "The current largest library in the world is the United States Library of Congress, which houses more than 38 million books.",
        img: "https://blog.anypromo.com/wp-content/uploads/2017/08/usflag-300x209.jpeg",
        href:"https://en.wikipedia.org/wiki/Library_of_Congress"
    },
    {
        name: "The Chemical Reaction Behind the Smell of Old Books",
        disc: "“Old book smell” is produced by the breakdown of two chemical components in paper, cellulose and lignin.",
        img: "https://blog.anypromo.com/wp-content/uploads/2017/08/pexels-photo-261782-300x189.jpeg",
        href:"https://www.scienceabc.com/nature/why-do-books-smell-so-good.html"
    },
    {
        name: "People Who Read Fiction Are Nicer",
        disc: "According to a 2017 study by Kingston University, there is a relationship between reading fiction and real-world social abilities.",
        img: "https://blog.anypromo.com/wp-content/uploads/2017/08/niceguy-300x174.jpeg",
        href:"https://www.researchgate.net/publication/315838511_Turner_R_2017_Bookworm_Film-buff_or_Thespian_Investigating_the_relationship_between_fictional_worlds_and_real-world_social_abilities"
    },
    {
        name: "People Who Read Live Longer",
        disc: "According to a study published in Social Science & Medicine, reading books for at least 30 minutes a day can increase one’s lifespan.",
        img: "https://blog.anypromo.com/wp-content/uploads/2017/08/bookandcoffee-300x200.jpeg",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0277953616303689"
    },
    {
        name: "The Most Expensive Book Ever",
        disc: "The most expensive book in the world is a first edition of the Bay Psalm Book, first printed in Cambridge, Massachusetts in 1640.",
        img: "https://blog.anypromo.com/wp-content/uploads/2017/08/money-300x200.jpeg",
        href: "https://en.wikipedia.org/wiki/Bay_Psalm_Book"
    },
    {
        name: "The Largest Book Made of Paper",
        disc: "The world’s largest book made of paper is located in Dubai, United Arab Emirates. It is five meters wide, 8.06 meters long, contains 429 pages and weighs over 3,000 pounds. ",
        img: "https://www.guinnessworldrecords.com/assets/45682?width=780&height=497",
        href: "https://www.guinnessworldrecords.com/world-records/largest-book"
    },

]

const showFucts = () =>{
    let frag = ""
    fuctsList.forEach(item =>{
        let card = `
            <div class="row mt-5 block">
                <div class="col-lg-3 p-3">
                    <img src=${item.img} alt="" width="200px">
                </div>
                <div class="col-lg-8 mt-4">
                    <h4>${item.name}</h4>
                    <p>${item.disc}</p>
                    <a href="${item.href}"><button class="btn btn-link myLink2">More</button></a>
                </div>  
            </div>
    
        `
        frag += card;
    })
    fucts.innerHTML = frag;
}

showFucts();