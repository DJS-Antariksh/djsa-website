import Card from './Card';
import Card2Line from './Card2Line';
import VCP1 from '../../assets/images_of_team_members/2023-2024/MannBhanushali.png'
import CP from '../../assets/images_of_team_members/2023-2024/OjasChanakya.png'
import VCP2 from '../../assets/images_of_team_members/2023-2024/ChinmayGotarane.png'
import TM from '../../assets/images_of_team_members/2023-2024/VedicaBafna.png'
import ElexH from '../../assets/images_of_team_members/2023-2024/AniruddhViswanathan.png'
import CDH from '../../assets/images_of_team_members/2023-2024/ChaityaShah.png'
import SH from '../../assets/images_of_team_members/2023-2024/DivyamDedhia.png'
import MH1 from '../../assets/images_of_team_members/2023-2024/BhavyanDaiya.png'
import MH2 from '../../assets/images_of_team_members/2023-2024/MeetChudasama.png'
import IH1 from '../../assets/images_of_team_members/2023-2024/OmGabani.png'
import IH2 from '../../assets/images_of_team_members/2023-2024/KashishPatni.png'

function Core_23_24(){
    return(
        <>
            <div style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginTop: '40px',

            }}>
                <div className='captain' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom:'-5px',
                }}>
                    <Card
                        image = {CP}
                        name = {'Ojas Chanakya'}
                        role = {'Captain'}
                    />
                </div>
                <div className='vice-cap-manager' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom:'-5px',
                }}>
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
                        <img src={VCP1} style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px', position: 'relative',top:'-1px'}} />
                        <div style={{color: 'white', fontWeight: '700', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>Mann Bhanushali</div>
                        <div style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '4px', marginTop:'10px'}}>Vice Captain</div>
                    </div>
                    <Card
                        image = {TM}
                        name = {'Vedica Bafna'}
                        role = {'Team Manager'}
                    />
                    <Card2Line
                        image = {VCP2}
                        name = {'Chinmay Gotarane'}
                        role = {'Vice Captain'}
                    />
                </div>
                <div className='heads' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                }}>
                    <Card2Line
                        image = {ElexH}
                        name = {'Aniruddh Vishwanathan'}
                        role = {'Electronics Head'}
                    />
                    <Card
                        image = {CDH}
                        name = {'Chaitya Shah'}
                        role = {'Coding Head'}
                    />
                    <Card
                        image = {SH}
                        name = {'Divyam Dedhia'}
                        role = {'Science Head'}
                    />
                    <Card
                        image = {MH1}
                        name = {'Bhavyan Daiya'}
                        role = {'Marketing Head'}
                    />
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
                        <img src={MH2} style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px', position: 'relative',top:'-1px'}} />
                        <div style={{color: 'white', fontWeight: '700', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>Meet Chudasama</div>
                        <div style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '4px', marginTop:'10px'}}>Marketing Head</div>
                    </div>
                    <Card
                        image = {IH1}
                        name = {'Om Gabani'}
                        role = {'Integration Head'}
                    />
                    <Card
                        image = {IH2}
                        name = {'Kashish Patni'}
                        role = {'Integration Head'}
                    />
                </div>
            </div>
        </>
    )
}

export default Core_23_24;