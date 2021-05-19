import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { ThemeContext } from 'providers/ThemeProvider';

import { Container } from 'components/common';
import Suitcase from 'components/common/Icons/Suitcase';
import Education from 'components/common/Icons/Education';
import Star from 'components/common/Icons/Star';

import { EXPERIENCE_DATA } from 'assets/data/experience';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine, Wrapper } from './styles';

export const Experience = () => {
  const { theme } = useContext(ThemeContext );
  const { experiences, education_experiences } = EXPERIENCE_DATA;

  return (
    <Wrapper as={Container} id="experiences">
      <h2>Experience</h2>
      <TimeLine >
        {experiences.map(experience => (
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            contentStyle={ theme === "light" ? 
              {background: '#fff', color: '#212121', boxShadow: '0 1px 6px 0 rgb(0 0 0 / 11%)'}
            : 
              {background: '#181717', color: '#fff', boxShadow: '0 1px 6px 0 rgb(0 0 0 / 11%)'}
            }
            
            contentArrowStyle={{ borderRight: '0px solid  #fff' }}
            date={`${experience.date} - ${experience.location}`}
            iconStyle={{ background: '#ddd', color: '#fff', boxShadow: '0 1px 6px 0 rgb(0 0 0 / 11%)'}}
            icon={experience.type == 'job' ? <Suitcase/>: <Education />}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.title}
              {experience.diploma ? ` - ${experience.diploma}` : ''}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.organization}</h4>
            <p>
              {experience.description ? experience.description : ''}
            </p>
          </VerticalTimelineElement>
        ))}
        
        <VerticalTimelineElement
            iconStyle={{ background: '#ddd', color: '#fff', boxShadow: '0 1px 6px 0 rgb(0 0 0 / 11%)' }}
            icon={<Star />}
        />
      </TimeLine>
    </Wrapper>
  )
}