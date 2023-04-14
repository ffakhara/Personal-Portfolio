export const ProjectItem = (props) => {

  const { projectName, description, url, image} = props;

//   console.log('Project Item Props:', props);

  return (
    <div className="card card-project">
        <img src={image} className="card-img-top" alt="screenshot project page" />
        <div className="card-body card-project-text">
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url} className="btn btn-primary" target="_blank"  rel="noopener noreferrer">visit website</a>
        
        </div>
      </div>
  )
}
