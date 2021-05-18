const attachEventHandlers = () => {
    let elements  = document.getElementsByClassName("about-nav");

    Array.prototype.forEach.call(elements, a => {
        a.onclick=updateText;
      });
};

const updateText = ev =>{
    const  textId = ev.currentTarget.dataset.id;
    console.log("ID: ",  textId);

    let description = document.getElementById("tell-me-more");

    let nav = document.getElementsByClassName("about-tabs");

    let anotherArray = document.getElementsByClassName("about-nav");

    Array.prototype.forEach.call(anotherArray, a => {
        a.style["font-family"] =  "Lato";
        a.style["background-color"] =  "#ffffff";
      });

    if (textId == "about-1") {
        document.querySelectorAll("[data-id='about-1']")[0].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-1']")[1].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-1']")[0].style["background-color"] =  "#B0F2B4";
        document.querySelectorAll("[data-id='about-1']")[1].style["background-color"] =  "#B0F2B4";
        description.innerHTML = `
        <p class = "text">I am currently pursuing a combined BS/MS in Computer Science and a certificate in Design at Northwestern University. When I'm not working on my HCI research project or writing about AI ethics, you can find me advising other undergrads on how to navigate college academics, working on my drawing skills (I've been really into oil pastels recently), or reading books about linguistics. Whether you want to talk about design, linguistics, or AI ethics, I would love to hear from you.</p>
        `;
        nav.innerHTML = `
        <a class = "about-nav" id = "about-nav-here" data-id="about-1">Who I am</a>
        <a class = "about-nav" data-id="about-2">What I'm doing</a>
        <a class = "about-nav" data-id="about-3">What I believe</a>
        `;
    }
    else if (textId ==  "about-2") {
        document.querySelectorAll("[data-id='about-2']")[0].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-2']")[1].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-2']")[0].style["background-color"] =  "#B0F2B4";
        document.querySelectorAll("[data-id='about-2']")[1].style["background-color"] =  "#B0F2B4";
        description.innerHTML = `
        <p class = "text">NUMBER 2</p>
        `;
        nav.innerHTML = `
        <a class = "about-nav" data-id="about-1">Who I am</a>
        <a class = "about-nav" id = "about-nav-here" data-id="about-2">What I'm doing</a>
        <a class = "about-nav" data-id="about-3">What I believe</a>
        `;
    }
    else if (textId == "about-3") {
        document.querySelectorAll("[data-id='about-3']")[0].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-3']")[1].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-3']")[0].style["background-color"] =  "#B0F2B4";
        document.querySelectorAll("[data-id='about-3']")[1].style["background-color"] =  "#B0F2B4";
        description.innerHTML = `
        <p class = "text">NUMBER 3</p>
        `;
        nav.innerHTML = `
        <a class = "about-nav" data-id="about-1">Who I am</a>
        <a class = "about-nav" data-id="about-2">What I'm doing</a>
        <a class = "about-nav" id = "about-nav-here" data-id="about-3">What I believe</a>
        `;
    }

    return;
};

const initDoc  = () => {
    attachEventHandlers();
};

initDoc();