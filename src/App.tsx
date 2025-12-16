import styled from 'styled-components'

const colors = {
  background: '#f1e7d8',
  accent: '#dd9d71',
  ink: '#26221f',
  surface: '#f9f3e8',
  subtle: '#4a443b',
};

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 72px clamp(16px, 4vw, 32px) 96px;
  background: ${colors.background};
  color: ${colors.ink};
`;

const Layout = styled.div`
  width: min(1180px, 100%);
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (max-width: 760px) {
    gap: 28px;
  }
`;

const Card = styled.div`
  width: 100%;
  background: ${colors.surface};
  border: 1px solid rgba(38, 34, 31, 0.14);
  border-radius: 2px;
  box-shadow: none;
  padding: clamp(28px, 5vw, 42px) clamp(22px, 5vw, 48px);
  display: grid;
  gap: 28px;

  @media (max-width: 760px) {
    border-radius: 8px;
    padding: clamp(22px, 6vw, 32px);
    gap: 20px;
  }
`;

const HeroImageWrap = styled.div`
  display: block;
  width: 100%;
  padding: clamp(6px, 1.2vw, 10px);
  background: ${colors.surface};
  border: 2px solid ${colors.ink};
  border-radius: 2px;
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0;
  border: 8px solid ${colors.accent};
  box-shadow: none;

  @media (max-width: 760px) {
    border-width: 6px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

// const Badge = styled.span`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   width: fit-content;
//   padding: 6px 12px;
//   background: ${colors.surface};
//   color: ${colors.ink};
//   border-radius: 4px;
//   font-weight: 700;
//   font-size: 11px;
//   letter-spacing: 0.16em;
//   line-height: 1.3;
//   text-transform: uppercase;
//   border: 1px solid rgba(38, 34, 31, 0.35);
//   box-shadow: none;
// `;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(56px, 12vw, 119px);
  line-height: 0.85;
  color: ${colors.ink};
  letter-spacing: -0.06em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;

  // &:last-of-type {
  //   font-size: clamp(28px, 7vw, 88px);
  //   letter-spacing: -0.025em;
  //   line-height: 0.9;
  //   margin-top: clamp(12px, 2vw, 18px);
  // }

  @media (max-width: 760px) {
    font-size: clamp(40px, 13vw, 72px);
    line-height: 0.92;
    letter-spacing: -0.04em;

    &:last-of-type {
      font-size: clamp(22px, 9vw, 46px);
      letter-spacing: -0.015em;
      margin-top: clamp(10px, 3vw, 16px);
    }
  }
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.subtle};
    font-size: 15px;
    max-width: 90ch;
    line-height: 1.75;
    text-align: center;

  @media (max-width: 760px) {
    max-width: 100%;
    font-size: 15px;
    line-height: 1.7;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  align-items: center;

  @media (max-width: 760px) {
    gap: 6px;
    align-items: stretch;
  }
`;

const PrimaryButton = styled.div`
background: transparent;
    color: #26221f;
    padding: 12px 16px;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 20px;
    width: min(720px, 100%);
    box-shadow: none;
    font-family: 'Aileron', sans-serif;
    text-align: center;


  @media (max-width: 760px) {
    width: 100%;
    letter-spacing: 0.16em;
    font-size: 12.5px;
    padding: 11px 14px;
  }
`;

const SecondaryButton = styled.div`
  background: transparent;
  color: ${colors.ink};
  border: 1.5px solid ${colors.accent};
  border-radius: 2px;
  padding: 10px 14px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 18px;
  width: min(520px, 100%);
  box-shadow: none;
  text-align: center;

  // &:hover {
  //   color: ${colors.accent};
  //   border-color: ${colors.accent};
  //   background: transparent;
  // }

  @media (max-width: 760px) {
    width: 100%;
    letter-spacing: 0.14em;
    font-size: 11.5px;
    padding: 10px 12px;
  }
`;

const Button = styled.button`
  background: ${colors.accent};
  color: ${colors.ink};
  border: 1.5px solid ${colors.ink};
  border-radius: 2px;
  padding: 10px 14px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 18px;
  width: min(520px, 100%);
  box-shadow: none;
  cursor: pointer;

   &:hover {
    color: ${colors.accent};
   border-color: ${colors.accent};
   background: transparent;
   }

  @media (max-width: 760px) {
    width: 100%;
    letter-spacing: 0.14em;
    font-size: 11.5px;
    padding: 10px 12px;
  }
`;

function App() {
  return (
    <Page>
      <Layout>
        <Card>
          <HeroImageWrap>
            <Title>THE LISTENING FIELD</Title>
            <HeroImage src="/listeningfield.jpg" alt="The Listening Field collage" />
            <Title>WINTER SCHOOL</Title>
          </HeroImageWrap>

          <Header>



            <PrimaryButton>What if listeners ran the world?</PrimaryButton>
            <Description>
              Over three days, artists and residents of Brussels gather to explore listening
              as a political and poetic act. The broadcast is a live unfolding of their
              collective process — part composition, part conversation, carried by the
              immediacy of radio. Transmitting directly from the temporary community of the
              winter school, The Listening Field turns listening into a public gesture: a way
              of thinking aloud with the city, and inviting others to join the dialogue in
              real time.
            </Description>
            <Actions>
              <SecondaryButton>29–31 January 2026 <br></br> GC De Rinck (Anderlecht)</SecondaryButton>
              <SecondaryButton>
                Part of SON.OOR · With BNA-BBOT & artist-Commons & School of Magical Politics
              </SecondaryButton>
              <Button
                onClick={() =>
                  window.open('/listening%20field.pdf', '_blank', 'noopener,noreferrer')
                }
              >
                CALL FOR PARTICIPANTS
              </Button>
            </Actions>
          </Header>
        </Card>

        {/* <Card> */}
        {/* <Description>
            The Listening Field is a three-day winter school dedicated to the political agency
            of the listener. Over three days, we will explore listening as a compositional,
            world-shaping force — a practice through which meaning, memory, and collective
            imagination are negotiated and the agency of the listener who act within their
            world.
          </Description>

          <Description>
            Bringing together artists, researchers, cultural workers, and community members,
            the school offers a temporary space for shared inquiry. Through listening
            protocols, story-based soundwork, somatic exercises, and simple radio tools,
            participants will explore how attention acts: how it filters, holds, resists, and
            transforms.
          </Description>
          <Description>
            The school culminates in a collective live radio broadcast, a public moment where
            our questions, doubts, and discoveries are made audible during SON.OOR.
          </Description> */}
        {/* </Card> */}
      </Layout>
    </Page>
  );
}

export default App