import Card from './Card';
import Card2Line from './Card2Line';
import CP from '../../assets/images_of_team_members/2024-2025/ShubhamVyas.png'
import VCP1 from '../../assets/images_of_team_members/2024-2025/SpoorthiShetty.png'
import VCP2 from '../../assets/images_of_team_members/2024-2025/RachitGarg.png'
import TM from '../../assets/images_of_team_members/2024-2025/KrupaliFuria.png'
import ElexH from '../../assets/images_of_team_members/2024-2025/JanayAsher.png'
import MH from '../../assets/images_of_team_members/2024-2025/SubhrajyotiMeher.png'
import CDH from '../../assets/images_of_team_members/2024-2025/AtharvMendhe.png'
import SH from '../../assets/images_of_team_members/2024-2025/RachitGarg.png'
import MH1 from '../../assets/images_of_team_members/2024-2025/HarshThakur.png'
import IH1 from '../../assets/images_of_team_members/2024-2025/EshaanSaawant.png'
import IH2 from '../../assets/images_of_team_members/2024-2025/ShraavyaBharti.png'
import IH3 from '../../assets/images_of_team_members/2024-2025/AryanSingh.png'

function Core_24_25(){
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
                        name = {'Shubham Vyas'}
                        role = {'Captain'}
                        linkedin={'https://www.linkedin.com/in/shubham-vyas-4b738428b/'}
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
                    {/* <div style={{
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
                        padding: '10px'
                    }}>
                        <img src={VCP1} alt="img" style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px', position: 'relative',top:'-1px', objectFit:''}} />
                        <div style={{color: 'white', fontWeight: '700', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>Spoorthi Shetty</div>
                        <div style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '4px', marginTop:'10px'}}>Vice Captain</div>
                    </div> */}
                    <Card
                        image = {VCP1}
                        name = {'Spoorthi Shetty'}
                        role = {'Vice Captain'}
                        linkedin={'https://www.linkedin.com/in/spoorthi-shetty-13b196323/'}
                       
                    />
                    <Card
                        image = {TM}
                        name = {'Krupali Furia'}
                        role = {'Team Manager'}
                        linkedin={'https://www.linkedin.com/in/krupali-furia-0bb490289/'}
                    />
                    <Card
                        image = {VCP2}
                        name = {'Rachit Garg'}
                        role = {'Vice Captain & Science Head'}
                        linkedin={'https://www.linkedin.com/in/rachitgarg6326/'}
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
                    <Card
                        image = {ElexH}
                        name = {'Janay Asher'}
                        role = {'Electronics Head'}
                        linkedin={'https://www.linkedin.com/in/janay-asher-56a8551b0/'}
                    />
                    <Card
                        image = {MH}
                        name = {'Subhrajyoti Meher'}
                        role = {'Mechanical Head'}
                    />
                    <Card
                        image = {CDH}
                        name = {'Atharv Mendhe'}
                        role = {'Coding Head'}
                        linkedin= {'https://www.linkedin.com/in/atharv-mendhe-118442237/'}
                    />
                    {/* <Card
                        image = {SH}
                        name = {'Rachit Garg'}
                        role = {'Science Head'}
                        linkedin={'https://www.linkedin.com/in/rachitgarg6326/'}
                    /> */}
                    <Card
                        image = {MH1}
                        name = {'Harsh Thakur'}
                        role = {'Marketing Head'}
                        linkedin={'https://www.linkedin.com/in/harsh-thakur-388982249/'}
                    />
                    {/* <div style={{
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
                    }}> */}
                        {/* <img src={MH2} style={{ width: '150px', height: '85px', border: '2px solid white' , borderRadius: '15px', position: 'relative',top:'-1px'}} />
                        <div style={{color: 'white', fontWeight: '700', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>Meet Chudasama</div>
                        <div style={{color: 'white', fontWeight: '500', fontSize: '13px', margin: '4px', marginTop:'10px'}}>Marketing Head</div> */}
                    {/* </div> */}
                    <Card
                        image = {IH1}
                        name = {'Eshaan Sawant'}
                        role = {'Integrations Head'}
                    />
                    <Card
                        image = {IH2}
                        name = {'Shraavya Bharti'}
                        role = {'Integrations Head'}
                        linkedin={'https://www.linkedin.com/in/shraavya-bharti-000a25250/'}
                    />
                    <Card
                        image = {IH3}
                        name = {'Aryan Singh'}
                        role = {'Integrations Head (Aerosystem)'}
                        linkedin={'https://www.linkedin.com/in/aryan-singh-348277299/'}
                    />
                </div>
            </div>
        </>
    )
}

export default Core_24_25;