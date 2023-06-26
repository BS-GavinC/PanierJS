
// Nom, prix, img, id, desc

let articles = [
    {id: 1, name : "Patate",price : 5.5, desc : "C'est une pomme de terre comme les autres. 🥔", img : "https://th.bing.com/th/id/R.418ebaeef999d00dcb34e50c1ef189e0?rik=DmeBzLymLnM5vw&riu=http%3a%2f%2fcitizenpotato.files.wordpress.com%2f2011%2f08%2fpotato.jpg&ehk=JFtzoxV16ePh%2bbiczrU%2fPhXLX4AwG2SNo9UCBwFIzRw%3d&risl=&pid=ImgRaw&r=0"},
    {id: 2, name : "Lait",price : 1.8, desc : "Un truc qui sort du pis de la vachette. 🤮", img : "https://th.bing.com/th/id/R.12097baa46366654e07c1d7140954454?rik=dOCPHYckjIRR5w&riu=http%3a%2f%2fleblogdulait.fr%2fwp-content%2fuploads%2f2015%2f06%2fbouteils-de-lait.jpg&ehk=A5irT9C4EP6TDqallrziqSB5IJ9PddDsYGoEPQHL27c%3d&risl=&pid=ImgRaw&r=0"},
    {id: 3, name : "RedBull",price : 1.5, desc : "Un truc qui te permet d'avoir ta licence de pilote. ✈️", img : "https://i5.walmartimages.com/asr/71e5349f-831e-4f1d-8987-59e35ac188e9_1.626a9554f4d4bb6d0560a39265ce80ba.jpeg"},
    {id: 4, name : "Chien",price : "A donner", desc : "Un truc qui fait des crotte sur ton tapis... 💩", img : "https://cdn.wallpapersafari.com/56/52/kNMpml.png"},
    {id : 5, name : "Pantoufle", price : 3.5, desc : "C'est cho les pieds ! 🩰", img : "https://th.bing.com/th/id/R.f349a37fcac2045966b85d9afdb5d609?rik=1ALktarUtoonNQ&riu=http%3a%2f%2fi5.walmartimages.com%2fasr%2f90be6ef5-849d-48de-aa01-f382a5ec7da4_1.76cc4005a43d802c7a6aa3d3e7a2e6d8.jpeg%3fodnBg%3dffffff&ehk=8CZkDJuReY0QYGmddD2KXClkmolC7RONyUE5Tb%2fzJnA%3d&risl=&pid=ImgRaw&r=0"}
]



for (const item of articles) {
    let elem = document.getElementsByTagName("article")[0].cloneNode(true);
    console.log(elem);
    elem.style.visibility = "visible"
    elem.getElementsByClassName("name")[0].innerHTML = item.name
    elem.getElementsByClassName("desc")[0].innerHTML = item.desc
    elem.getElementsByClassName("price")[0].innerHTML = item.price + (item.price > 0 ? " €" : "")
    elem.getElementsByClassName("image")[0].src = item.img
    document.getElementById("list").appendChild(elem)
}

let elems = document.getElementsByTagName("article")
elems[elems.length -1].remove();