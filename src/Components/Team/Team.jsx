import React from 'react';
import "./Team.css";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Vatsal Bhardwaj',
            role: 'Founder and CEO',
            image: 'https://media.licdn.com/dms/image/D5603AQEtM2f5DaFZJw/profile-displayphoto-shrink_800_800/0/1672973180740?e=1706140800&v=beta&t=ufoil8p1MgLo1JM0vGLEOzBYltRhQeYCh_xhs2bK7_8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
        },
        {
            id: 2,
            name: 'Arnav Jhala',
            role: 'Co-Founder and Chief Scientist',
            image: 'https://media.licdn.com/dms/image/D5603AQHnsSFf7hdJ4g/profile-displayphoto-shrink_800_800/0/1682338980813?e=1706140800&v=beta&t=J6PJ6RkTxU2typskJZB0y-6b3SUfXtlyJzwGzqSIrfw&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
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

            <div className="team-text">
                <p className="paragraph">
                  We are an experienced team with a deep understanding of the video games, cloud services, AR/VR, and AI/ML. 
                    </p>
                
                    <p className="paragraph">
                        
                    Jabali’s founder & CEO Vatsal Bhardwaj,  has a unique background and deep domain expertise in video games having served as an CPO at Skillz, GM & Director of Game Tech at AWS, Product lead at Oculus and GM & Head of Studios for Storm8 games. His products have generated billions of dollars in revenue and reached over a billion players. 

                    </p>
                        <p className="paragraph">
                        Dr. Arnav Jhala, Co-founder has been on the forefront of AI and Video games research for the last 15 years including 100+ publications in AAAI, IEEE and numerous grants from NSF, DARPA and various leading game companies. Dr. Jhala is also the Director of Digital games research initiative and Visual narrative cluster. 

                        </p>
<p className="paragraph">
The rest of the founding team includes software engineering and design with an expertise in developing AI/ML, video games, gaming services, and cloud computing. 
        </p>
            </div>


            
    </div>
    );
}

export default Team;
