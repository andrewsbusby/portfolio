import './proj.css';

function Projects() {
    return (
        <div className='projects'>
            <h1>Blue Witness</h1>
                <p>
                Utilized Git to finalize look and design of landing page in police use-of-force tracker, added a sidebar showing most recent incident reports with React. 
                Used Agile methodologies, while working with stakeholders at a national non-profit organization to meet design goals. Coordinated with frontend developers to meet stakeholder requirements. 
                Verified pull requests on GitHub for changes to React.js and Node.js code base. Communicated regarding unnecessary changes or suggested improvements to track stakeholder requests.
                </p>
            <h1>Water My Plants</h1>
                <p>
                Created RESTful API for backend of single page application that enabled user to track plant maintenance. Built backend endpoints to enable CRUD functionality using Node.js and Express. 
                Followed Agile methodologies while working within a team of backend and frontend
                </p>
            <h1>Secret Family Recipe</h1>
                <p>
                Worked with a team to build a single page CRUD app that collects, stores, and displays recipes per user entries. Used React to develop recipe submission forms for the website, and then called to database based on user information via Axios to connect the recipe to user. 
                Created display cards for recipes for unique users via React and received recipe via and then put into state with React to break down components of recipe for display. 
                Selected styled components to improve the aesthetics of new recipe input form.
                </p>
        </div>
    )
}

export default Projects