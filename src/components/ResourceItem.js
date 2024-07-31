import React from 'react';

const ResourceItem = ({ resource }) => {
  return (
    <div className="resource-item">
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default ResourceItem;
