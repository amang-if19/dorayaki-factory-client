import React from "react";
import styled from "styled-components";
// import Badge from "./Badge";
import { Navigation } from "react-minimal-side-navigation";
import { useLocation, useHistory } from "react-router-dom";
import AvatarImage from "../assets/avatarImage.png";
// import { RiFileCopyLine } from "react-icons/ri";
// import { FaWallet } from "react-icons/fa";
// import { AiOutlinePieChart } from "react-icons/ai";
// import { AiFillHome } from "react-icons/ai";
// import { BsJournalCheck } from "react-icons/bs";
// import { darkThemeColor } from "../utils";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function Sidebar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <Container> 
      <ProfileContainer>
      <Avatar src={AvatarImage} />
      <Name>Admin</Name>
      </ProfileContainer>  
      <LinksContainer>
      <>
        <Navigation
        activeItemId={location.pathname}
            onSelect={({itemId}) => {
              // maybe push to the route
              history.push(itemId);
            }}
            items={[
              {
                title: 'Home',
                itemId: '/home',
              },

              {
                title: 'Lihat Daftar',
                subNav: [
                  {
                    title: 'Pesanan',
                    itemId: '/pesanan-dorayaki',
                  },
                  {
                    title: 'Bahan Baku',
                    itemId: '/daftar-bahan-baku',
                  },
                  {
                    title: 'Resep',
                    itemId: '/daftar-resep',
                  },
                  {
                    title: 'Request',
                    itemId: '/daftar-request',
                  },
                ],  
              },            
            ]}
            />
          </>
        <ContactContainer>
          <span>Logout Accout ?</span>
          <a href="#">Click here !</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: #484258 ;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

// const Links = styled.ul`
//   list-style-type: none;
//   display: flex;
//   flex-direction: column;
//   padding-top: 2rem;
//   height: 60%;
// `;

// const Link = styled.li`
//   margin-left: 25%;
//   margin-bottom: 2rem;
//   display: flex;
//   gap: 1rem;
//   color: #e4e4e4;
//   cursor: pointer;
//   a {
//     font-weigth : 300;
//     text-decoration: none;
//     color: #e4e4e4;
//   }
//   h3{
//     font-weight : 300;
//   }
//   svg {
//     font-size: 1.1rem;
//     margin-top: 3%;
//   }
// `;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 10%;
  margin: 20% auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;