import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const Box = styled(motion.li)`
  width: 100%;
  min-height: 280px;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 1.5rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 260px;
    padding: 1.25rem 1.25rem;
    border-radius: 0 32px 0 32px;
  }

  @media (max-width: 425px) {
    min-height: 240px;
    padding: 1rem 1.25rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.4vw);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: calc(0.75em + 0.25vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  flex: 1;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  font-size: calc(0.75em + 0.2vw);

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0 0 0 50px;
  font-size: calc(0.9em + 0.2vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 425px) {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
                {tags.map((t, index) => (
                    <Tag key={index}>#{t}</Tag>
                ))}
            </Tags>
            <Footer>
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                    Visit
                </Link>
                {github && (
                    <Git href={github} target="_blank" rel="noopener noreferrer">
                        <Github width={30} height={30} />
                    </Git>
                )}
            </Footer>
        </Box>
    )
}

export default Card
