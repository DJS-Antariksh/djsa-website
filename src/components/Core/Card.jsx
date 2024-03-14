import temp from '../../assets/temp.png';

function Card(props) {
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
            <img src={props.image} style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px',}} />
            <div style={{color: 'white', fontWeight: '700', fontSize: '14px', margin: '8px'}}>{props.name}</div>
            <div className ='text-center' style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '6px'}}>{props.role}</div>
        </div>
	);
}

Card.defaultProps = {
    image: temp,
    name: 'Alex Smith',
    role: 'Software Engineer',
}

export default Card;