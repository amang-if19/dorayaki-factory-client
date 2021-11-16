import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function MainContent() {
  return (
      <Container>
          <Navbar />
          <SubContainer>
              <SectionOne>
                  <ColumnOne1></ColumnOne1>
              </SectionOne>
          </SubContainer>
      </Container>
  )
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
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


const SubContainer = styled.div``;

const SectionOne = styled.div``;

const ColumnOne1 = styled.div``;

export default MainContent;