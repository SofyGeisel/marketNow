import styled from "styled-components";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: black;
  color: white;
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
`;
const Logo = styled.h2`
  margin-bottom: 10px;
  display: flex;
  align-items: left;
  justify-content: flex-start;
  `;
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialContainer = styled.div`
  display: flex;
  `;
const SocialIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  `;
const Title= styled.h3`
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  font-weight: normal;
  font-size: 15px;

`;
const Right = styled.div`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  justify-content: center;

`;
const ContactItem = styled.div`
  margin-bottom: 0px;
  display: flex;
  align-items: left;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <DirectionsRunOutlinedIcon
            style={{ color: "white", fontSize: 30, transform: "rotate(15deg)" }}
          />
          MarketNow
        </Logo>
        
      </Left>
      <Center>
        <Title>@FullStackG24. Todos los derechos reservados</Title>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon style={{ fontSize:"18px"}} />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon style={{ fontSize:"18px"}} />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon style={{ fontSize:"18px"}} />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon style={{ fontSize:"18px"}} />
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px", fontSize:"15px"}}/> +569-95679898
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight:"10px", fontSize:"15px"}}/>contacto@marketnow.cl
        </ContactItem>
        
      </Right>
    </Container>
  );
};

export default Footer;
