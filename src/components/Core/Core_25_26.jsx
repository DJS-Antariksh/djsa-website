import Card from './Card';
import Card2Line from './Card2Line';

// 2025-2026 Team Members
import KashyapDattani from '../../assets/images_of_team_members/2025-2026/Kashyap_Dattani.png';
import ChaahatSingh from '../../assets/images_of_team_members/2025-2026/Chahat_Singh.png';
import EeshanAmdekar from '../../assets/images_of_team_members/2025-2026/Eeshan_Amdekar.png';
import ManavBosmiya from '../../assets/images_of_team_members/2025-2026/Manav_Bosmiya.png';
import MeetShah from '../../assets/images_of_team_members/2025-2026/Meet_Shah.png';
import OmBubna from '../../assets/images_of_team_members/2025-2026/Om_Bubna.png';

import PalashDhabalia from '../../assets/images_of_team_members/2025-2026/Palash_Dhabalia.png';
import PranitaKakirde from '../../assets/images_of_team_members/2025-2026/Pranita_Kakirde.png';
import ShaanUpadhyay from '../../assets/images_of_team_members/2025-2026/Shaan_Updhyay.png';
import ShakthiRavishankar from '../../assets/images_of_team_members/2025-2026/Shakthi_ravishankar.png';
import ShreyaDalvi from '../../assets/images_of_team_members/2025-2026/Shreya_Dalvi.png';
import TanviGupte from '../../assets/images_of_team_members/2025-2026/Tanvi_gupte.png';
import HarshVasa from '../../assets/images_of_team_members/2025-2026/Harsh_Vasa.png';

function Core_25_26(){
    return(
        <>
            <div style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginTop: '40px',

            }}>
                {/* Captain */}
                <div className='captain' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom:'-5px',
                }}>
                    <Card
                        image = {KashyapDattani}
                        name = {'Kashyap Dattani'}
                        role = {'Captain'}
                    />
                </div>

                {/* Vice Captains & Manager */}
                <div className='vice-cap-manager' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom:'-5px',
                }}>
                    <Card
                        image = {MeetShah}
                        name = {'Meet Shah'}
                        role = {'Vice Captain'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {TanviGupte}
                        name = {'Tanvi Gupte'}
                        role = {'Team Manager'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {ManavBosmiya}
                        name = {'Manav Bosmiya'}
                        role = {'Vice Captain'}
                        // linkedin={'...'}
                    />
                </div>

                {/* Heads */}
                <div className='heads' style={{
                    width:'100vw',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                }}>
                    <Card
                        image = {EeshanAmdekar}
                        name = {'Eeshan Amdekar'}
                        role = {'Electronics Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {ShakthiRavishankar}
                        name = {'Shakthi Ravishankar'}
                        role = {'Electronics Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {PalashDhabalia}
                        name = {'Palash Dhabalia'}
                        role = {'Mechanical Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {HarshVasa}
                        name = {'Harsh Vasa'}
                        role = {'Coding Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {ShreyaDalvi}
                        name = {'Shreya Dalvi'}
                        role = {'Science Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {ShaanUpadhyay}
                        name = {'Shaan Upadhyay'}
                        role = {'Marketing and Management Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {ChaahatSingh}
                        name = {'Chaahat Singh'}
                        role = {'Marketing and Management Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {PranitaKakirde}
                        name = {'Pranita Kakirde'}
                        role = {'Integrations Head'}
                        // linkedin={'...'}
                    />
                    <Card
                        image = {OmBubna}
                        name = {'Om Bubna'}
                        role = {'Integrations Head'}
                        // linkedin={'...'}
                    />
                </div>
            </div>
        </>
    )
}

export default Core_25_26;