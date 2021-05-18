import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/about.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About me</h1>
          <p>
            I am a big fan of of hackathons and for the past two years I have been involved in seven of them as both a participant and an organizer. 
          </p>
          <p>
            Oustide of work, I am always looking to find new hiking trails or to try new food. I also love raccoons and Korean dramas!
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
