import React, { useState } from 'react';
import { useLanguage } from '../Context/Language';
import ToolTip from './ToolTip';


const Skills = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const skillsData = {
        frontend: [
            { name: 'Swift', color: '#fa672f', icon: `${process.env.PUBLIC_URL}/icons/swift.svg` },
            { name: 'HTML', color: '#e44d26', icon: `${process.env.PUBLIC_URL}/icons/html.svg` },
            { name: 'CSS', color: '#1172b8', icon: `${process.env.PUBLIC_URL}/icons/css.svg` },
            { name: 'JavaScript', color: '#ffcf3d', icon: `${process.env.PUBLIC_URL}/icons/javascript.svg` },
            { name: 'React', color: '#00d8ff', icon: `${process.env.PUBLIC_URL}/icons/react.svg` },
            { name: 'Bootstrap', color: '#563d7c', icon: `${process.env.PUBLIC_URL}/icons/bootstrap.svg` },
        ],
        backend: [
            { name: 'Python', color: '#3776AB', icon: `${process.env.PUBLIC_URL}/icons/python.svg` },
            { name: 'Java', color: '#e76f00', icon: `${process.env.PUBLIC_URL}/icons/java.svg` },
            { name: 'C++', color: '#00599C', icon: `${process.env.PUBLIC_URL}/icons/cpp.svg` },
            { name: 'C#', color: '#7f3a86', icon: `${process.env.PUBLIC_URL}/icons/csharp.svg` },
        ],
        database: [
            { name: 'Oracle', color: '#ee0006', icon: `${process.env.PUBLIC_URL}/icons/oracle.svg` },
            { name: 'MySQL', color: '#00758f', icon: `${process.env.PUBLIC_URL}/icons/mysql.svg` },
            { name: 'SQL Server', color: '#cfd8dc', icon: `${process.env.PUBLIC_URL}/icons/sqlserver.svg` },
            { name: 'MongoDB', color: '#4ea94c', icon: `${process.env.PUBLIC_URL}/icons/mongodb.svg` },
        ],
        tools: [
            { name: 'Git', color: '#ee513b', icon: `${process.env.PUBLIC_URL}/icons/git.svg` },
            { name: 'GitHub', color: '#cfd8dc', icon: `${process.env.PUBLIC_URL}/icons/github.svg` },
            { name: 'Docker', color: '#1f62ed', icon: `${process.env.PUBLIC_URL}/icons/docker.svg` },
            { name: 'NPM', color: '#cb3837', icon: `${process.env.PUBLIC_URL}/icons/npm.svg` },
            { name: 'Jenkins', color: '#d33833', icon: `${process.env.PUBLIC_URL}/icons/jenkins.svg` },
            { name: 'WordPress', color: '#21759B', icon: `${process.env.PUBLIC_URL}/icons/wordpress.svg` },
            { name: 'Shopify', color: '#51ed45', icon: `${process.env.PUBLIC_URL}/icons/shopify.svg` },
            { name: 'Figma', color: '#A95FFF', icon: `${process.env.PUBLIC_URL}/icons/figma.svg` },
            { name: 'Linux', color: '#DFAF22', icon: `${process.env.PUBLIC_URL}/icons/linux.svg` },
            { name: 'VirtualBox', color: '#495c8f', icon: `${process.env.PUBLIC_URL}/icons/virtualbox.svg` },
            { name: 'StarUML', color: '#980f38', icon: `${process.env.PUBLIC_URL}/icons/staruml.svg` },
        ]
    };


    const allSkills = [
        ...skillsData.frontend,  
        ...skillsData.backend.slice(0, 5),  
        skillsData.backend[5],  // 1 ícono restante de backend
        ...skillsData.database,  // 4 íconos
        ...skillsData.tools.slice(0, 4),  // 4 íconos más = 9 total
        ...skillsData.tools.slice(4)  // 3 íconos restantes de tools = 5 total
    ].filter(Boolean); // Elimina undefined/null

    const completeSkillsData = {
        all: allSkills,
        ...skillsData
    };

    const renderIcon = (skill) => {
        // Todos los skills ahora usan imágenes SVG
        return (
            <img 
                src={skill.icon} 
                alt={skill.name}
                className="skill-icon"
            />
        );
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                        <h2 className="steel-metal">{t.skills.title}</h2>
                    </div>
                </div>
                
                <div className="row mb-4">
                    <div className="col-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'inline-block' }}>
                                <div className="skills-categories">
                                    {Object.keys(completeSkillsData).map((category) => (
                                        <button
                                            key={category}
                                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(category)}
                                        >
                                            {t.skills[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <div className="skills-container">
                            <div className="skills-grid" key={activeCategory}>
                                {completeSkillsData[activeCategory].filter(Boolean).map((skill, index) => (
                                    <div 
                                        key={`${activeCategory}-${skill.name}`}
                                        tabIndex="0"
                                        className="skill-item"
                                        style={{ 
                                            '--skill-color': skill.color,
                                            '--animation-order': index
                                        }}
                                    >
                                        {renderIcon(skill)}
                                        <ToolTip>{skill.name}</ToolTip>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;