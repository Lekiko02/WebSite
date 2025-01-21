document.querySelectorAll(".js-Data").forEach((dataItem) => {
    const backgroundItems = document.querySelectorAll(".js-background");

    dataItem.addEventListener("click", () => {
        const dataContent = `
            <section class="posts">
								

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

			</div>

        `;
    
        backgroundItems.forEach((background) => {
            background.style.backgroundColor = "transparent";
        });
        

        dataItem.style.backgroundColor = "white";

        document.querySelector(".js-main").innerHTML = dataContent;
    });
});
