import React from 'react';
import "./Team.css";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Louise Donadieu',
            role: 'Support Consultant',
            image: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
        },
        {
            id: 2,
            name: 'Jeff Fisher',
            role: 'Project Manager',
            image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
        },
        {
            id: 3,
            name: 'Tom Lowry',
            role: 'UI/UX Designer',
            image: 'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
        },
    ];

    return (
        <div className="Team">

        <h1 className='heading'>Our Team</h1>

        <div className="team_members">
            {teamMembers.map((member) => (
                <div key={member.id} className="member">
                    <img className="member_pfp" src={member.image} alt={`Image of ${member.name}`} />
                    <div className="member_data">
                        <h3 className="member_name">
                            {member.name}
                        </h3>
                        <p className="member_role">
                            {member.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Team;