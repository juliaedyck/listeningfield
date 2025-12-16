import styled from 'styled-components'

const colors = {
  background: '#DFA86F',
  accent: '#669340',
  ink: '#0f172a',
  surface: '#fff8f0',
  subtle: '#42523b',
};

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px 64px;
  background: ${colors.background};
  color: ${colors.ink};
`;

const Layout = styled.div`
  width: min(1080px, 100%);
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Card = styled.div`
  width: 100%;
  background: ${colors.surface};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 28px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.16),
    0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px clamp(24px, 4vw, 36px) 30px;
  display: grid;
  gap: 22px;
`;

const HeroImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: min(520px, 80vw);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 22px;
  border: 8px solid ${colors.accent};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 12px;
  background: ${colors.accent};
  color: #f8fafc;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-size: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1.2;
  color: ${colors.ink};
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.subtle};
  font-size: 16px;
  max-width: 46ch;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`;

const PrimaryButton = styled.button`
  background: ${colors.accent};
  color: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);
  transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
  }
`;

const SecondaryButton = styled.button`
  background: rgba(102, 147, 64, 0.08);
  color: ${colors.ink};
  border: 1px solid rgba(102, 147, 64, 0.4);
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;

  &:hover {
    background: rgba(102, 147, 64, 0.14);
    border-color: rgba(102, 147, 64, 0.6);
    color: ${colors.subtle};
  }
`;

const Dot = styled.span`
  display: inline-flex;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #fbbf24;
  box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.2);
`;

function App() {
  return (
    <Page>
      <Layout>
        <Card>
          <HeroImageWrap>
            <HeroImage src="/listeningfield.jpg" alt="The Listening Field collage" />
          </HeroImageWrap>

          <Header>
            <Badge>
              <Dot />
              Live radio winter school
            </Badge>
            <Title>THE LISTENING FIELD</Title>
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
              <SecondaryButton>29–31 January 2026 · GC De Rinck (Anderlecht)</SecondaryButton>
              <SecondaryButton>
                Part of SON.OOR · With BNA-BBOT & artist-Commons & School of Magical Politics
              </SecondaryButton>
            </Actions>
          </Header>
        </Card>

        <Card>
          <Description>
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
          </Description>
        </Card>
      </Layout>
    </Page>
  );
}

export default App