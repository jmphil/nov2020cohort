import React from 'react';
import AddProject from './AddProject';
import Project from './Project'


const ProjectManagement = () => {
    return (
        <div>
            <AddProject addProject={(project) => handleAddProject(project)}/>
        </div>
    )
}

export default ProjectManagement
