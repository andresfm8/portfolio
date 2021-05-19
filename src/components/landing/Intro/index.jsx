import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import avatar from 'assets/illustrations/avatar.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { Links } from 'components/theme/Footer/styles';
import social from '../../theme/Footer/social.json';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Andres, a Full Stack Developer!</h4>
          <Button as={AnchorLink} href="#about">
            About Me
          </Button>
          <Links style = {{display: 'block', marginTop: '1em'}}>
            {social.map(({ id, name, link, icon }) => (
              <a key={id} href={link} target="_blank" 
                rel="noopener noreferrer" aria-label={`follow me on ${name}`}
              >
                <img width="24" src={icon} alt={name} />
              </a>
            ))}
          </Links>
        </Details>
        <Thumbnail>
          <img src={avatar} alt="I’m Andres, a Full Stack Developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
