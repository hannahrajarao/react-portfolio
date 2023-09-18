import Project from '../components/Project';

export default function PorfolioPage() {
    const projectInfo = [
        {
            "name": "Shouter",
            "link": "https://shouterapp-a720f8ccbc1f.herokuapp.com",
            "imgSrc": "shouter.png"
        },
        {
            "name": "Monochrome Minimalist Minesweeper",
            "link": "https://hannahrajarao.github.io/monochrome-minimalist-minesweeper",
            "imgSrc": "monochrome-minimalist-minesweeper.png"
        },
        {
            "name": "Color Guessing Game",
            "link": "https://hannahrajarao.github.io/color-guessing-game/",
            "imgSrc": "color-guessing-game.png"
        },
        {
            "name": "Mouse Following Gradients",
            "link": "https://hannahrajarao.github.io/mouse-following-gradients/flashlight.html",
            "imgSrc": "mouse-tracker.png"
        },

    ];
    const projectList = projectInfo.map(project => 
        <Project 
            name={project.name} 
            link={project.link} 
            imgSrc={`assets/images/projects/${project.imgSrc}`} 
            imgDesc={`Screenshot image of ${project.name}`}
        />
    );
    return (<>
        <h2>Portfolio</h2>
        <div className='projects'>
            {projectList}
        </div>
    </>);
}
