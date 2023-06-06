import React from 'react';
import {jsx,css} from '@emotion/react';
import styled from'@emotion/styled';


const GlassmorphStyle= styled.div`
    width:30%;
    display:flex;
    flex-direction:row;
    color: white;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(38, 75, 102, 0.18);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
        `;

const FirstSectionImg=styled.img`
    width:50%;
`

const FirstSection=styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:1rem;
`

const SecondSection=styled.section`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    padding:1rem;

`

const Title = styled.h1`
    color: blue;
    text-align:center;
    `;

const ImageCrown = styled.img`
width:100%;
clip-path: polygon(48% 23%, 64% 0, 81% 23%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0, 16% 24%, 31% 0);
`;
      

function KhCard() {

    return (
    <>
        <GlassmorphStyle>
            <FirstSection>
                <Title>Sora</Title>
                <FirstSectionImg src="https://static.wikia.nocookie.net/kingdomhearts/images/e/ef/Sora_KHIII.png" alt="Sora" />
                <p>Sora est le héros de la série Kingdom Hearts, ainsi qu'un élu de la Keyblade. Vivant sur les Îles du Destin avec ses meilleurs amis Riku et Kairi, il voulait quitter son monde avec eux, à l'aide d'un radeau, et en découvrir d'autres. Toutefois, la nuit avant leur départ, l'île fut attaquée par les Sans-cœur, qui détruisirent le cœur de ce monde.</p>
            </FirstSection>
                <SecondSection>
                    <ImageCrown src="https://png.pngitem.com/pimgs/s/148-1483174_index-of-kingdom-hearts-dream-drop-kingdom-hearts.png" alt="" />
                     <ImageCrown src="https://static.wikia.nocookie.net/kingdomhearts/images/f/f3/Destiny_Islands_Logo_KH.png" alt="" />
                </SecondSection>
        </GlassmorphStyle>
    </>
    );
}

export default KhCard