import React from 'react';

const SmallCard = ({title,icon,times}) => {
  return (
    <div className="smallcard">
        <div className="main">
        <p>{title}</p>
        {icon}
        </div>
        <h3>{times}</h3>
    </div>
  )
}

export default SmallCard