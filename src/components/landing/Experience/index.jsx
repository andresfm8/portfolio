import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { ThemeContext } from 'providers/ThemeProvider';

import { Container } from 'components/common';
import { EXPERIENCE_DATA } from 'assets/data/experience';
import Suitcase from 'components/common/Icons/Suitcase';
import 'react-vertical-timeline-component/style.min.css';
import { Wrapper } from './styles';




//Deploy without this and then continue dev
export const Experience = () => {
  const { theme } = useContext(ThemeContext );
  const { work_experiences, education_experiences } = EXPERIENCE_DATA;


  return (
    <Wrapper as={Container} id="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        {work_experiences.map(experience => (
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
            icon={experience.type === 'job' ? <Suitcase/> : ''}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p>
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}

        {education_experiences.map(experience => (
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
              // icon={}
            >
              <h3 className="vertical-timeline-element-title">{experience.program}, {experience.diploma}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.institution}</h4>
              <p>
                {experience.description}
              </p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Wrapper>
  )
}