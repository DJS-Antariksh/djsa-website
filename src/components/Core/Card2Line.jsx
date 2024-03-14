import temp from '../../assets/temp.png';

function Card2Line(props) {
	return (
        <div style={{
            width: '150px',
            height: '175px',
            borderRadius: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            border: '4px solid white',
            padding: '12px'
        }}>
            <img src={props.image} style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px', position: 'relative', top: '4px'}} />
            <div style={{color: 'white', fontWeight: '700', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>{props.name}</div>
            <div style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '4px'}}>{props.role}</div>
        </div>
	);
}

Card2Line.defaultProps = {
    image: temp,
    name: 'Alex Smith',
    role: 'Software Engineer',
}

export default Card2Line;