const attachEventHandlers = () => {
    let elements  = document.getElementsByClassName("about-nav");

    Array.prototype.forEach.call(elements, a => {
        a.onclick=updateText;
        a.onmouseover=green;
        a.onmouseout=noGreen;
      });
};

const green = ev =>{
    ev.currentTarget.style.backgroundColor = "#B0F2B4";
}

const noGreen = ev =>{
    ev.currentTarget.style.backgroundColor = "#FFFFFF";
}

const updateText = ev =>{
    const  textId = ev.currentTarget.dataset.id;
    console.log("ID: ",  textId);

    let description = document.getElementById("tell-me-more");

    let nav = document.getElementsByClassName("about-tabs");

    let anotherArray = document.getElementsByClassName("about-nav");

    Array.prototype.forEach.call(anotherArray, a => {
        a.style["font-family"] =  "Lato Bold";
        a.style["border"] =  "none";
      });

    if (textId == "about-1") {
        document.querySelectorAll("[data-id='about-1']")[0].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-1']")[1].style["font-family"] =  "Lato Italic";
        document.querySelectorAll("[data-id='about-1']")[0].style["border"] =  "1px solid #272727";
        document.querySelectorAll("[data-id='about-1']")[1].style["border"] =  "1px solid #272727";
        description.innerHTML = `
        <p class = "text"><b>To the world </b>- I'm a student at Northwestern.  I'm a coder, a mentor, a writer, and an aspiring designer.<br><br><b>To my friends </b>- I'm reliable, creative, and supportive. I'm a dog-lover, a (sometimes poor) plant-mom, and a Harry Potter nerd.<br><br><b>To me </b>- I'm someone who loves to get lost (in a new city, in a forest, or in a book). I always have a desire to learn, try, and experience new things.</p><div class = "spacer1"></div>
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
        document.querySelectorAll("[data-id='about-2']")[0].style["border"] =  "1px solid #272727";
        document.querySelectorAll("[data-id='about-2']")[1].style["border"] =  "1px solid #272727";
        description.innerHTML = `
        <p class = "text">I am currently pursuing a combined <b>BS/MS in Computer Science</b> and a <b>certificate in Design</b> at Northwestern University. <br><br>When I'm not working on my design research project or writing about AI ethics, you can find me mentoring other undergrads on how to navigate college academics, working on my drawing skills (I've been really into oil pastels recently), or learning a new language (right now, I'm working on my French). </p><div class = "spacer2"></div>
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
        document.querySelectorAll("[data-id='about-3']")[0].style["border"] =  "1px solid #272727";
        document.querySelectorAll("[data-id='about-3']")[1].style["border"] =  "1px solid #272727";
        description.innerHTML = `
        <p class = "text">As a computer science and design student, I believe that great things happen when technology is designed to support people, not the other way around. To do this it is crucial that <b> we as developers, designers, and engineers fully understand the people we are designing for</b> and analyze what the impacts of our work could be.<br><br>My past work ranges from HCI research to graphic design, where I always aim to center my process around the people I am designing for. Additionally, I've had the opportunity to raise awareness about the ethical implications of current technologies through <a href = "https://raiso.substack.com" target = "_blank"><mark>Hold the Code</mark></a>, a weekly newsletter designed to break down topics in AI and CTech and discuss their implications in a way that is understandable to all readers, regardless of their technical background. </p><div class = "spacer3"></div>
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