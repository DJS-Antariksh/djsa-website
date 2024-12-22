// import temp from '../../assets/temp.png';

// function Card(props) {
// 	return (
// 		<div style={{
//             width: '165px',
//             height: '188px',
//             borderRadius: '20px',
//             boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
//             backgroundColor: 'transparent',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-evenly',
//             alignItems: 'center',
//             border: '4px solid white',
//             padding: '12px'
//         }}>
//             <img src={props.image} alt="img" style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px'}} />
//             <div style={{color: 'white', fontWeight: '700', fontSize: '14px', margin: '8px'}}>{props.name}</div>
//             <div className ='text-center' style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '6px'}}>{props.role}</div>
//         </div>
// 	);
// }

// Card.defaultProps = {
//     image: temp,
//     name: 'Alex Smith',
//     role: 'Software Engineer',
// }

// export default Card;

import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Card({ image, name, role, linkedin }) {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        if (linkedin) {
            window.open(linkedin, '_blank', 'noopener,noreferrer');
        }
    };

    const handleMouseOver = (e) => {
        if (linkedin) e.currentTarget.style.transform = 'scale(1.05)';
        setHover(true);
    };

    const handleMouseOut = (e) => {
        if (linkedin) e.currentTarget.style.transform = 'scale(1)';
        setHover(false);
    };

    return (
        <div 
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
                width: '165px',
                height: '200px',
                borderRadius: '20px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '4px solid white',
                padding: '12px',
                cursor: linkedin ? 'pointer' : 'default',
                position: 'relative',
                transition: 'transform 0.2s'
            }}
        >
            {linkedin && (
                <FaLinkedin 
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: 'white',
                        fontSize: '20px',
                        zIndex: 1,
                        opacity: hover ? 1 : 0, // Only show on hover
                        transition: 'opacity 0.2s'
                    }}
                />
            )}
            <div style={{
                width: '140px',
                height: '140px',
                overflow: 'hidden',
                borderRadius: '15px',
                border: '2px solid white'
            }}>
                <img 
                    src={image} 
                    alt={name} 
                    style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                    }} 
                />
            </div>
            <div style={{
                color: 'white', 
                fontWeight: '700', 
                fontSize: '14px',
                textAlign: 'center'
            }}>
                {name}
            </div>
            <div style={{
                color: 'white', 
                fontWeight: '500', 
                fontSize: '13px',
                textAlign: 'center'
            }}>
                {role}
            </div>
        </div>
    );
}

export default Card;