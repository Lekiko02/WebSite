document.querySelectorAll(".js-resume").forEach((resumeItem) => {
    const backgroundItems = document.querySelectorAll(".js-background");

    resumeItem.addEventListener("click", () => {
        const resume = `
            
            <div class="resume-container">
  <iframe src="Resume/Resume.pdf" class="resume-iframe" width="100%" height="600px"></iframe>
</div>


        `;
    
        backgroundItems.forEach((background) => {
            background.style.backgroundColor = "transparent";
        });
        

        resumeItem.style.backgroundColor = "white";

        document.querySelector(".js-main").innerHTML = resume;
    });
});
