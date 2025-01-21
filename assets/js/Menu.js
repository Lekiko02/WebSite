document.querySelectorAll(".js-menu").forEach((menuItem) => {
	const backgroundItems = document.querySelectorAll(".js-background");
    menuItem.addEventListener("click", () => {

        const menuContent = `
           						<!-- Featured Post -->
							<article class="post featured">
								<header class="major">
								
									<h2><a href="https://github.com/Lekiko02/Portfolio-of-Advanced-Projects/tree/main/Amazon_Project">Amazon Web Clone Project<br />
									</a></h2>
									<p>This project is a web-based simulation of an e-commerce platform inspired by Amazon. Users can add and remove items from their cart, search for products, and review orders. The site is responsive and optimized for various screen sizes, including mobile and tablets.</p>
								</header>
								<a href="https://github.com/Lekiko02/Portfolio-of-Advanced-Projects/tree/main/Amazon_Project" class="image2 main"><img src="images/amazon.gif" alt="" /></a>
								<ul class="actions special">
									<li><a href="https://github.com/Lekiko02/Portfolio-of-Advanced-Projects/tree/main/Amazon_Project" class="button large">View Project</a></li>
								</ul>
							</article>

						<!-- Posts -->
							<section class="posts">
								<article>
									<header>
									
										<h2><a href="https://github.com/Lekiko02/Portfolio-of-Advanced-Projects/tree/main/Rock-Paper-scissors">Rock-Paper-scissors game<br />
										</a></h2>
									</header>
									<a href="https://github.com/Lekiko02/Portfolio-of-Advanced-Projects/tree/main/Rock-Paper-scissors" class="image fit"><img width: 800px height: 400px src="images/rockGame.gif" alt="" /></a>
									<p>This is a simple Rock Paper Scissors game implemented in HTML, CSS, and JavaScript. The game allows users to play against the computer, keeps track of the score, and provides the option to reset the score.</p>
									<ul class="actions special">
										<li><a href="https://github.com/Lekiko02/Portfolio-of-Advanced-Projects/tree/main/Rock-Paper-scissors" class="button">View Project</a></li>
									</ul>
								</article>

								<article class="post featured">
									<header class="major">
									
										<h2><a href="https://github.com/Lekiko02/CSS-HTML/tree/main/Project/Swipe_Project">Swipe Web-site<br />
										</a></h2>
										<p>Swipe is a responsive and visually appealing website built to showcase payment infrastructure capabilities. This project is designed to demonstrate and improve HTML and CSS skills, focusing on advanced concepts such as Flexbox, Grid layout, custom animations, and media queries.</p>
									</header>
									<a href="https://github.com/Lekiko02/CSS-HTML/tree/main/Project/Swipe_Project" class="image main"><img src="images/SwipeProject.gif" alt="" /></a>
									<ul class="actions special">
										<li><a href="https://github.com/Lekiko02/CSS-HTML/tree/main/Project/Swipe_Project" class="button large">View Project</a></li>
									</ul>
								</article>

								<article>
									<header>
									
										<h2><a href="https://github.com/Lekiko02/Data-analyst-project/tree/main/DataAnalysis_Project/MySQL/COVID%20Portfolio%20Project">Data Exploration in SQL<br />
										</a></h2>
									</header>
									<a href="https://github.com/Lekiko02/Data-analyst-project/tree/main/DataAnalysis_Project/MySQL/COVID%20Portfolio%20Project" class="image fit"><img src="images/covid.jpg" alt="" /></a>
									<p>Data Exploration of Covid 19 Dataset in SQL Server.</p>
									<ul class="actions special">
										<li><a href="https://github.com/Lekiko02/Data-analyst-project/tree/main/DataAnalysis_Project/MySQL/COVID%20Portfolio%20Project" class="button">View Project</a></li>
									</ul>
								</article>
								<article>
									<header>
										<h2><a href="https://public.tableau.com/app/profile/denis.sima/vizzes">Tableau Projects<br />
										</a></h2>
									</header>
									<a href="https://public.tableau.com/app/profile/denis.sima/vizzes" class="image fit"><img src="images/tableau.jpg" alt="" /></a>
									<p>This holds all of my Tableau Dashboards.</p>
									<ul class="actions special">
										<li><a href="https://public.tableau.com/app/profile/denis.sima/vizzes" class="button">View Project</a></li>
									</ul>
								</article>

						


						<section class="split contact">
							<section class="alt">
								<h3>Location</h3>
								<p><br />
								Old Town ME 04468</p>
							</section>
							<section>
								<h3>Phone</h3>
								<p><a href="#">(207) 331-2823</a></p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="#">deniskevine7@gmail.com</a></p>
							</section>
							<section>
								<h3>Social</h3>
								<ul class="icons alt">
								
									<li><a href="https://www.linkedin.com/in/denis-kevine-sima-124375305/" class="icon brands alt fa-linkedin"><span class="label">linkedin</span></a></li>
									<li><a href="https://github.com/Lekiko02" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>

				<!-- Copyright -->
					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>
        `;

		backgroundItems.forEach((background) => {
            background.style.backgroundColor = "transparent";
        });
       
        menuItem.style.backgroundColor = "white";

        document.querySelector(".js-main").innerHTML = menuContent;
    });
});


