
document.querySelector("contact-form")
.addEventListener("submit", function(event){
    event.preventDefault();
    const name=
    document.getElementById("name").value;
    const message=
    document.getElementById("message").value;
    const text=
    `Name:${name}\n` +
    `Message:${message}`;
    const whatsappNumber="0673284678";
    const url=
    `https://wa.me/${whatsappNumber}?text=
    ${encodeURIComponent(text)}`;
    window.open(url, "_blank");
});
alert('Javascript is working');
document.querySelectorAll('.product-slide');
const thumbnails=
document.querySelectorAll('.thumb');
const nextBtn=
document.getElementById('next');
const prevBtn=
document.getElementById('prev');
const itemCounter=
document.getElementById('item-counter');
const mainContainer=
document.getElementById('main-container');
const productData=[
    {bg: 'linear-gradient(135deg, #2b2220 0%, #121212 100%)', label:'#1'}
]
let currentIndex=0,
const totalSlides= slides.lenght;
function updateSlide(index){
    slides.forEach(slide =>
        slide.classList.remove('active')); 
        thumbnails.forEach(thumb =>
            thumb.classList.remove('active') );
}
slides[index].classList.add('active');
thumbnails[index]. classList.add('active')

thumbnails.forEach(thumb=>{
    thumb.addEventListener('click',()=>{
        const slideIndex=
        parseInt(thumb.getAttribute('data-index'));
        updateSlide(slideIndex);
    });
});
document.addEventListener('keydown', (e)=> {
    if(e.key==='ArrowRight'){
        nextBtn.click();
    }else if(e.key==='ArrowLeft'){
        prevBtn.click();
    }
});
const products=[
        { id: 1, category: 'dresses', img: "pic/dress1.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress2.jpg"},
        { id: 1, category: 'dresses',img: "pic/dress3.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress4.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress5.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress6.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress7.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress8.jpg"},
        {id: 1, category: 'dresses',img: "pic/dress9.jpg"},
        {id: 1, category: 'tops',img: "pic/top1.jpg"},
         {id: 1, category: 'tops',img: "pic/top2.jpg"},
          {id: 1, category: 'tops',img: "pic/top3.jpg"},
           {id: 1, category: 'tops',img: "pic/top4.jpg"},
            {id: 1, category: 'tops',img: "pic/top5.jpg"},
             {img: "pic/top6.jpg"},
        {img: "pic/skirt1.jpg"},
        {img: "pic/skirt2.jpg"},
        {img: "pic/skirt3.jpg"},
        {img: "pic/skirt4.jpg"},
        {img: "pic/skirt5.jpg"},
{img: "pic/kid1.jpg"},
{img: "pic/kid2.jpg"},
{img: "pic/kid3.jpg"},
{img: "pic/kid4.jpg"},
{img: "pic/kid5.jpg"},
];
let currencyCategory='all';
let currentIndex= 0;
const imgElement=document,getElementById('product-img');
const prevBtn=document.getElementById('prev-btn');
const nextBtn=document.getElementById('next-btn');
const filterBtns=document.querySelectorAll('.filter-btn');
function getFilteredProducts(){
    if ( currencyCategory==='all'){
        return products;
    }
    return products.filter(product=> product.category===currencyCategory);
}
function updateDisplay(){
    const filtered= getFilteredProducts();
    if(filtered.length===0) return;
    if (currentIndex >=filtered.length){
        currentIndex=0;
    }else if (currentIndex< 0){
        currentIndex=filtered.length-1;
    }
    const currentProduct= filtered[currentIndex];
    imgElement.src=currentProduct.img;

}
nextBtn.addEventListener('click',()=>{
    const filtered= getFilteredProducts();
    currentIndex=(currentIndex+1)% filtered.length;
    updateDisplay();
});
prevBtn.addEventListener('click',()=>{
    const filtered= getFilteredProducts();
    currentIndex=(currentIndex-1 +filtered.length)% filtered.length;
    updateDisplay();
    });
filterBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        filterBtns.forEach(b=> b.classList.remove('active'));
        e.target.classList.add('active');
        currencyCategory=e.target.getAttribute('data-category');
        currentIndex=0;
        updateDisplay();
    })
})
updateDisplay();
