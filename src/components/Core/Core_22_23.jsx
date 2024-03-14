import Card from './Card';
import Card2Line from './Card2Line';
import CP from '../../assets/images_of_team_members/2022-2023/BhaumikThakker.png'
import VCP from '../../assets/images_of_team_members/2022-2023/SanchitPatil.png'
import TM from '../../assets/images_of_team_members/2022-2023/NiharikaDamodaran.png'
import MechH1 from '../../assets/images_of_team_members/2022-2023/ReubenManjaly.png'
import MechH2 from '../../assets/images_of_team_members/2022-2023/AnishKoyande.png'
import ElexH from '../../assets/images_of_team_members/2022-2023/VedangiGupte.png'
import CDH from '../../assets/images_of_team_members/2022-2023/TaherKapadia.png'
import SH from '../../assets/images_of_team_members/2022-2023/JuhiKhare.png'
import MH from '../../assets/images_of_team_members/2022-2023/AnshShah.png'
import IH from '../../assets/images_of_team_members/2022-2023/KrushangVakil.png'
import OH from '../../assets/images_of_team_members/2022-2023/JinayShah.png'


function Core_22_23(){
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
                        name = {'Bhaumik Thakker'}
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
                        name = {'Sanchit Patel'}
                        role = {'Vice Captain'}
                    />
                    <Card2Line
                        image = {TM}
                        name = {'Niharika Damodaran'}
                        role = {'Team Manager'}
                    />
                </div>
                <div className='heads' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                }}>
                    <Card2Line
                        image = {MechH1}
                        name = {'Reuben Manjaly'}
                        role = {'Mechanical Head'}
                    />
                    <Card
                        image = {MechH2}
                        name = {'Anish Koyande'}
                        role = {'Mechanical Head'}
                    />
                    <Card
                        image = {ElexH}
                        name = {'Vedangi Gupte'}
                        role = {'Electronics Head'}
                    />
                    <Card
                        image = {CDH}
                        name = {'Taher Kapadia'}
                        role = {'Coding Head'}
                    />
                    <Card
                        image = {SH}
                        name = {'Juhi Khare'}
                        role = {'Science Head'}
                    />
                    <Card
                        image = {MH}
                        name = {'Ansh Shah'}
                        role = {'Marketing Head'}
                    />
                    <Card
                        image = {IH}
                        name = {'Krushang Vakil'}
                        role = {'Integration Head'}
                    />
                    <Card
                        image = {OH}
                        name = {'Jinay Shah'}
                        role = {'Operations Head'}
                    />
                </div>
            </div>
        </>
    )
}

export default Core_22_23;