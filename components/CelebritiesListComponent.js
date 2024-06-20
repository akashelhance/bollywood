import React from 'react';
import CelebCardComponent from './CelebCardComponent';

const CelebritiesListComponent = () => {
  const celebrities = [
    {
      id: 1,
      image: "http://localhost:8000/celebrities/read-recommend-logo.png",
      industry: [
        {
          id: 1,
          name: "Bollywood",
          name_slug: "bollywood"
        }
      ],
      roles: [
        {
          id: 1,
          name: "ACTOR",
          name_slug: "actor"
        }
      ],
      first_name: "Akash",
      last_name: "Elchance",
      celebrity_slug: "akash-elchance",
      description: "Desc Desc 5",
      is_published: true,
      created_at: "2024-06-08T12:43:08.312674Z",
      updated_at: "2024-06-09T08:26:20.333593Z"
    },
    {
      id: 2,
      image: "http://localhost:8000",
      industry: [
        {
          id: 1,
          name: "Bollywood",
          name_slug: "bollywood"
        }
      ],
      roles: [
        {
          id: 1,
          name: "ACTOR",
          name_slug: "actor"
        }
      ],
      first_name: "Anirudh",
      last_name: "Mittal",
      celebrity_slug: "anirudh-mittal",
      description: "Desc desc 33",
      is_published: true,
      created_at: "2024-06-09T08:18:16.111637Z",
      updated_at: "2024-06-09T08:23:24.360877Z"
    }
  ];

  return (
    <div className="container mx-auto p-4">
        
      {celebrities.map((celebrity) => (
      
        <CelebCardComponent key={celebrity.id} celebrity={celebrity} />
      ))}
    </div>
  );
};

export default CelebritiesListComponent;
