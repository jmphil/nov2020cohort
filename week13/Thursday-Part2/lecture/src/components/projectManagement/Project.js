import React from 'react'
import ProjectItem from './ProjectItem'

const Project = ({projects, onDelete}) => {
    
    return 
        <ul>

        {projects.map(project => {
            
            return <ProjectItem key={projects.id}>{project.title} - {project.category} />
        })}    
        
    <ul/>
}



export defualt Project

