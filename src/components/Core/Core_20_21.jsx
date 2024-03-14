import Card from './Card';
import Card2Line from './Card2Line';
import MecH from '../../assets/images_of_team_members/2020-2021/NeelBusa.png'
import CH from '../../assets/images_of_team_members/2020-2021/NishiModi.png'
import MH from '../../assets/images_of_team_members/2020-2021/ShyamalOza.png'
import IH from '../../assets/images_of_team_members/2020-2021/SiddhantSalvi.png'
function Core_20_21(){
    return(
        <>
            <div style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                marginTop: '40px',
            }}>
                <div className='captain' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Card2Line
                        name = {'Rohit Kalkundre'}
                        role = {'Captain'}
                    />
                </div>
                <div className='vice-cap-manager' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                }}>
                    <Card2Line
                        name = {'Vivekanand Sahu'}
                        role = {'Vice Captain'}
                    />
                    <Card2Line
                        name = {'Omkar Malwade'}
                        role = {'Team Manager'}
                    />
                </div>
                <div className='heads' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '35px',
                }}>
                    <Card2Line
                        image = {MecH}
                        name = {'Neel Busa'}
                        role = {'Mechanical Head'}
                    />
                    <Card
                        name = {'Priyam Shah'}
                        role = {'Mechanical Head'}
                    />
                    <Card2Line
                        name = {'Vivekanand Sahu'}
                        role = {'Electronics Head'}
                    />
                    <Card
                        image = {CH}
                        name = {'Nishi Modi'}
                        role = {'Coding Head'}
                    />
                    <Card
                        image = {MH}
                        name = {'Shyamal Oza'}
                        role = {'Marketing Head'}
                    />
                    <Card
                        image = {IH}
                        name = {'Siddhant Salvi'}
                        role = {'Integration Head'}
                    />
                </div>
            </div>
        </>
    )
}

export default Core_20_21;