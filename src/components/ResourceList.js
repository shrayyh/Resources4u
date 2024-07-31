import React from 'react';
import ResourceItem from './ResourceItem';

const ResourceList = ({ resources }) => {
  return (
    <div className="resource-list">
      {resources.map(resource => (
        <ResourceItem key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceList;
