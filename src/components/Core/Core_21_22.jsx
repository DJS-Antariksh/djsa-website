import Card from './Card';
import Card2Line from './Card2Line';
import CP from '../../assets/images_of_team_members/2021-2022/RutwikBhangale.png'
import MH from '../../assets/images_of_team_members/2021-2022/DarshanMehta.png'
import CDH from '../../assets/images_of_team_members/2021-2022/JazibDawre.png'
import ElexH from '../../assets/images_of_team_members/2021-2022/ParshviShah.png'
import VCP from '../../assets/images_of_team_members/2021-2022/SandeepJala.png'
import MecH from '../../assets/images_of_team_members/2021-2022/VedantSingh.png'
import SH from '../../assets/images_of_team_members/2021-2022/VishalUmaria.png'

function Core_21_22(){
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
                        image = {CP}
                        name = {'Rutwik Bhangale'}
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
                    <Card
                        image = {VCP}
                        name = {'Sandeep Jha'}
                        role = {'Vice Captain'}
                    />
                    <Card
                        name = {'Yukti Shah'}
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
                    <Card
                        image = {MecH}
                        name = {'Vedant Singh'}
                        role = {'Mechanical Head'}
                    />
                    <Card
                        image = {ElexH}
                        name = {'Parshvi Shah'}
                        role = {'Electronics Head'}
                    />
                    <Card
                        image = {CDH}
                        name = {'Jazib Dawre'}
                        role = {'Coding Head'}
                    />
                    <Card
                        image = {MH}
                        name = {'Darshan Mehta'}
                        role = {'Marketing Head'}
                    />
                    <Card
                        image = {SH}
                        name = {'Vishal Umaria'}
                        role = {'Science Head'}
                    />
                </div>
            </div>
        </>
    )
}

export default Core_21_22;