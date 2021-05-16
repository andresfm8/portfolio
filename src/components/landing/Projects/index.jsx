import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import { Wrapper, Grid, Item, Content, ExtraInfo, Languages, IconLink } from './styles';
import Github from 'components/common/Icons/Github';
import Devpost from 'components/common/Icons/Devpost';
import Web from 'components/common/Icons/Web';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
              totalCount
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    url
                    description
                    stargazers {
                      totalCount
                    }
                    forkCount
                    languages(first: 3) {
                      nodes {
                        id,
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id}  rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <ExtraInfo theme={theme}>
                  <IconLink href={node.url} target="_blank">
                    <Github color={theme === "light" ? "#000" : "#fff"}/>
                  </IconLink>
                  <IconLink href={node.url} target="_blank">
                    <Devpost color={theme === "light" ? "#000" : "#fff"}/>
                  </IconLink>
                  <IconLink href={node.url} target="_blank">
                    <Web color={theme === "light" ? "#000" : "#fff"}/>
                  </IconLink>
                </ExtraInfo>
                <ExtraInfo theme={theme}>
                  <Languages>
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </ExtraInfo>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
