const attachEventHandlers = () => {
    let elements  = document.getElementsByClassName("about-nav");

    Array.prototype.forEach.call(elements, a => {
        a.onclick=updateText;
        a.onmouseover=green;
        a.onmouseout=noGreen;
      });
};

const green = ev =>{
    ev.currentTarget.style.backgroundColor = "#bae7bd";
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
        <p class = "text"><b>What the world sees:</b> I'm a student at Northwestern.  I'm a coder, a writer, a researcher, and a mentor.<br><br><b>What my friends see:</b> I'm reliable, creative, and supportive. I'm a dog-lover, a (sometimes poor) plant-mom, and a Harry Potter nerd.<br><br><b>Who I am:</b> I'm someone who loves to get lost (in a new city, in a forest, or in a book). I always have a desire to learn, try, and experience new things.</p><div class = "spacer1"></div>
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
        <p class = "text">I am currently pursuing a combined <b>BS/MS in Computer Science</b> and a <b>certificate in Design</b> at Northwestern University. <br><br>At Northwestern, I am heavily involved in <a href = "http://dtr.northwestern.edu" target = "_blank"><b>HCI and design research through the Design, Technology, and Research Program</b></a> in the Delta Lab. My research focuses on developing a system that supports its users in improving their metacognitive behaviors. Additionally, I am a founding member of <a href = "https://raiso.substack.com" target = "_blank"><b>Hold the Code</b></a>, a newsletter that breaks down topics in technology and AI ethics so they are understandable to all readers, regardless of their technical background. <br><br>When I'm not working on my research or writing about AI ethics, you can find me advising other students on how to navigate the rigorous academic environment at NU through the <a href="https://www.northwestern.edu/academic-support-learning/academic-strategies/upal/" target="_blank"><b>UPAL program</b></a>. Recently, I've also volunteered my design skills to SaveMiHeart, a Michigan-based nonprofit, where I am currently redesigning their website. <br><br>In my free time, I enjoy learning new languages (maintenant, je practique le fran&ccedil;ais), exploring new coffee shops, and making ceramic mugs. </p><div class = "spacer2"></div>
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
        <p class = "text">As a computer science and design student, I believe that great things happen when technology is designed to support people, not the other way around. To do this it is crucial that <b> we as developers, designers, and engineers fully understand the people we are designing for</b> and analyze what the impacts of our work are and could be.</p><div class = "spacer3"></div>
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