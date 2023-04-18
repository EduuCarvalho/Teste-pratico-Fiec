import styled from "styled-components"
import indiceFiec from "../assets/images/indice-fiec .png"
import logoMapFIEC from "../assets/images/logo-indice-fiec-map.png";
import logoP2i from "../assets/images/logo-p2i.png";
import logoObservatorio from "../assets/images/logo-observatorio.png";
import logoFIEC from "../assets/images/logo-fiec.png";
import logoABDI from "../assets/images/logo-ABDI.png";

export function FiecManagerPage() {
    
    return (
        <MainPage>
            <SideBar>
                <LogoContainer>
                    <img src={logoMapFIEC} alt={"Logo icon"} width={80}/>
                    <img src={indiceFiec} alt={"Logo icon"} width={170}/>
               </LogoContainer>
               <SideButtonContainer>

               </SideButtonContainer>
               <BottomLogoContainer>
                    <img src={logoP2i} alt={"Logo icon"} width={200}/>
                    <img src={logoObservatorio} alt={"Logo icon"} width={200}/>
                    <img src={logoFIEC} alt={"Logo icon"} width={200}/>
                    <img src={logoABDI} alt={"Logo icon"} width={150}/>
               </BottomLogoContainer>
            </SideBar>
            <PageContentTopBarContainer>
                <TopBar>

            
                </TopBar>
                <PageContent>

                </PageContent>
            </PageContentTopBarContainer>

        </MainPage>
    );
};

const MainPage = styled.div`
    display:flex;
`
const SideBar = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#27408B;
    height:100vh;
    width: 15vw;
`
const LogoContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    margin-left:20px;
    img:nth-child(2) {
        margin-left:30px;
    }
`
const SideButtonContainer = styled.div `
    display:flex;
    flex-direction:column;
    background-color:lightcoral;
    margin-top:50px;
    height:25%;
    width:90%;
`
const BottomLogoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    border-radius:30px;
    width:90%;
    height:45%;
    background-color:#3A5FCD;
    margin-top:20px;
    justify-content:space-between;
`

const PageContentTopBarContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
`
const TopBar = styled.div`
    display:flex;
    background-color:#FFFFFF;
    height:90px;
`
const PageContent = styled.div`
    display:flex;
    background-color:lightgray;
    height:100%;

`