import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function MainContent() {
  return (
      <Container>
          <Navbar />
          <SubContainer>
              <SectionOne>  
                <div className="text-center">
                  <Text className='h2'>Selamat Datang di Web Dorayaki Factory!</Text>
                  <Text className='text-muted'>Pada web ini Anda bisa melihat dab mencari tahu tentang Dorayaki :D</Text>
                </div>
              </SectionOne>
          </SubContainer>
      </Container>
  )
}

const Container = styled.div`
  width: 80%;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const SectionOne = styled.div`
  display: flex;
  justify-content: center;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;

const Text = styled.div`
  text-align : center;
`;

export default MainContent;