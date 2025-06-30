import React from 'react';
import { useTheme } from '../Context/Theme';
import { useLanguage } from '../Context/Language';

const Projects = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    const projects = [
        {
        id: 1,
        title: 'Project 1',
        description: 'In progress to deliver the best for you.',
        technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
        },
        {
        id: 2,
        title: 'Project 2',
        description: 'In progress to deliver the best for you.',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        },
        {
        id: 3,
        title: 'Project 3',
        description: 'In progress to deliver the best for you.',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        }
    ];

    return (
        <section id="projects" className="py-5">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center mb-5">
                <h2 className="steel-metal">{t.projects.title}</h2>
            </div>
            </div>
            
            <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className={`card h-100 card-hover ${isDark ? 'bg-dark text-light border-secondary' : 'light-card-bg'}`}>
                    <div className="card-body text-center">
                    <div className="display-1 mb-3">{project.image}</div>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-3">
                        {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary me-2 mb-2">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary btn-sm flex-fill">
                        {t.projects.viewProject}
                        </button>
                        <button className="btn btn-outline-primary btn-sm flex-fill">
                        {t.projects.viewCode}
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;