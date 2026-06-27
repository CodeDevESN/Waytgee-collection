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