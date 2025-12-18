import styled from 'styled-components'

const colors = {
  background: '#f1f1f1',
  accent: '#dd9d71a1',
  ink: '#26221f',
  surface: '#f9f3e8',
  subtle: '#4a443b',
};

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  // padding: 30px clamp(16px, 4vw, 32px) 96px;
  padding: 0;
  background: ${colors.background};
  color: ${colors.ink};
  width: 100%;
`;

const Layout = styled.div`
  width: min(1180px, 100%);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 32px);
  gap: 40px;

  @media (max-width: 760px) {
    gap: 28px;
  }
`;

const Card = styled.div`
  width: 100%;
  background: ${colors.background};
  border-radius: 2px;
  box-shadow: none;
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
  background: ${colors.accent};
  border: 2px solid ${colors.ink};
  border-radius: 2px;
`;

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0;

  box-shadow: none;
  max-height: 600px;
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

const ImageCredit= styled.p`
    padding: 0;
    margin: 0;
    font-size: 11px;
      @media (max-width: 760px) {
    font-size: 8px;
}
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(56px, 12vw, 130px);
  line-height: 0.85;
  color: ${colors.ink};
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;


  @media (max-width: 760px) {
    font-size: clamp(22px, 9vw, 46px);
    line-height: 0.92;
    // letter-spacing: -0.04em;

    &:last-of-type {
      font-size: clamp(22px, 9vw, 46px);
      // letter-spacing: -0.015em;
      // margin-top: clamp(10px, 3vw, 16px);
    }
  }
`;

const Descriptions = styled.div`
 display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 4px;
  justify-content: center;

@media (max-width: 760px) {
 flex-direction: column;
 align-items: stretch;
}
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.subtle};
    font-size: 16px;
    max-width: 90ch;
    line-height: 1.75;
     text-align: left;
    padding: 3%;
    background-color: ${colors.surface};

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

const Subhead = styled.div`
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
const SecondaryButton = styled.button`
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
  cursor: pointer;


  &:hover {
    border-color: ${colors.accent};
    background: ${colors.accent};
  }

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
  margin-top: 5%;

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

const SecondaryActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

@media (max-width: 760px) {
 flex-direction: column;
 align-items: stretch;
}
`;

const Email = styled.a`
  color: ${colors.ink};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(24px, 6vw, 48px);
  padding: clamp(24px, 5vw, 40px) 0;
  border-top: 1px solid rgba(38, 34, 31, 0.12);
  margin-top: clamp(32px, 6vw, 56px);

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 20px;
    padding: 28px 0;
  }
`;

const Logo = styled.img`
  height: clamp(40px, 8vw, 80px);
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  transition: opacity 120ms ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 760px) {
    height: clamp(36px, 10vw, 60px);
  }
`;

function App() {
  return (
    <Page>
      <Layout>
        <Card>
          <HeroImageWrap>
            <Title>LISTENING FIELD</Title>
            <HeroImage src="/listeningfield.jpg" alt="The Listening Field collage" />
            <Title>WINTER SCHOOL</Title>
          </HeroImageWrap>
          <ImageCredit>Photo: Lower Levant Company (LLC) installation, “when the ear tells the eye where to look” 2023 photographed by Julia E. Dyck</ImageCredit>

          <Header>



            <PrimaryButton>What if listeners ran the world?</PrimaryButton>
            <Descriptions>
            <Description>
              Over three days, artists and residents of Brussels gather to explore listening
              as a political and poetic act. The broadcast is a live unfolding of their
              collective process — part composition, part conversation, carried by the
              immediacy of radio. Transmitting directly from the temporary community of the
              winter school, The Listening Field turns listening into a public gesture: a way
              of thinking aloud with the city, and inviting others to join the dialogue in
              real time.
              <Button
                onClick={() =>
                  window.open('/ListeningField_EN.pdf', '_blank', 'noopener,noreferrer')
                }
              >
                CALL FOR PARTICIPANTS
              </Button>
            </Description>
            <Description>
            The Listening Field is een driedaagse winterschool die gewijd is aan de politieke handelingsbekwaamheid van de luisteraar. Gedurende drie dagen verkennen we luisteren als een compositorische, wereldvormende kracht — een praktijk waarin betekenis, geheugen en collectieve verbeelding worden onderhandeld, en waarin de handelingsbekwaamheid van de luisteraar binnen zijn, haar of hun wereld centraal staat.
            <Button
                onClick={() =>
                  window.open('/ListeningField_NL.pdf', '_blank', 'noopener,noreferrer')
                }
              >
               Oproep voor deelnemers
              </Button>
            </Description>
            <Description>
            Le Listening Field est une école d’hiver de trois jours dédiée à l’agence politique de l’auditeur. Sur trois jours, nous explorerons l’écoute comme une force compositionnelle qui façonne le monde — une pratique à travers laquelle le sens, la mémoire et l’imagination collective se négocient, tout comme l’agence de l’auditeur dans son rapport au réel.
            <Button
                onClick={() =>
                  window.open('/ListeningField_FR.pdf', '_blank', 'noopener,noreferrer')
                }
              >
              Appel à participation
              </Button>
            </Description>
            </Descriptions>
            <Actions>
              <Subhead>29–31 January 2026 <br></br> GC De Rinck (Anderlecht)</Subhead>
              <Subhead>
                Part of SON.OOR · With BNA-BBOT & artist-Commons & School of Magical Politics
              </Subhead>
           
            </Actions>
            <Subhead>Masterclasses & Broadcast</Subhead>
            <SecondaryActions>
              <SecondaryButton
                onClick={() =>
                  window.open('https://www.bna-bbot.be/en/events/', '_blank', 'noopener,noreferrer')
                }
              >
                Masterclass 1 <br></br>18/12/2025 <br></br>
                Listening as Political Practice: Toward a Protocol of Attention
              </SecondaryButton>
              <SecondaryButton
                onClick={() =>
                  window.open(
                    'https://www.lasemaineduson.be/event/offering-from-the-listening-field/',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                Broadcast <br></br>  31/01/2026  <br></br>  SON.OOR FESTIVAL
              </SecondaryButton>
              <SecondaryButton
                onClick={() =>
                  window.open('https://www.bna-bbot.be/en/events/', '_blank', 'noopener,noreferrer')
                }
              >
                Masterclass 2 <br></br> 05/03/2026 <br></br>(more soon)
              </SecondaryButton>
            </SecondaryActions>
            <Email href="mailto:listeningfield@proton.me">
  listeningfield@proton.me
</Email>

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

        <Footer>
          <Logo
            src="/Logo De Rinck_PNG (1).png"
            alt="GC De Rinck logo"
          />
          <Logo
            src="/PNG-N-Logo Brussel transparant.png"
            alt="Brussels logo"
          />
             <Logo
            src="/BNA-BBOT_logo-2566264724.jpg"
            alt="BNA BBOT logo"
          />
        </Footer>
      </Layout>
    </Page>
  );
}

export default App