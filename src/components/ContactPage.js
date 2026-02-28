import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { lightTheme } from './Themes';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import BigTitle from '../subComponents/BigTitlte';
import { device } from '../utils/breakpoints';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  max-width: 100vw;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: ${(props) => props.theme.fontFamily};
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 1.5rem;
    justify-content: flex-start;
    padding-top: 5rem;
  }

  @media ${device.mobileL} {
    padding: 1rem;
    padding-top: 4rem;
  }

  @media ${device.mobileM} {
    padding: 0.75rem;
    padding-top: 3.5rem;
  }

  @media ${device.mobileS} {
    padding: 0.5rem;
    padding-top: 3rem;
  }
`;

const FormCard = styled(motion.div)`
  background: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 2rem;
    max-width: 100%;
  }

  @media ${device.mobileL} {
    padding: 1.5rem;
  }

  @media ${device.mobileM} {
    padding: 1.25rem;
    border-radius: 10px;
  }

  @media ${device.mobileS} {
    padding: 1rem;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.5rem;

  @media ${device.mobileL} {
    margin-bottom: 1.5rem;
    gap: 0.25rem;
  }

  @media ${device.mobileS} {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-family: 'Karla', sans-serif;
  font-size: calc(1.5rem + 1.5vw);
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0;
  word-break: break-word;

  @media ${device.mobileL} {
    font-size: 1.5rem;
  }

  @media ${device.mobileM} {
    font-size: 1.35rem;
    letter-spacing: 0.05em;
  }

  @media ${device.mobileS} {
    font-size: 1.2rem;
    letter-spacing: 0.03em;
  }
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.text};
  font-size: calc(0.75rem + 0.4vw);
  opacity: 0.8;
  margin: 0;

  @media ${device.mobileL} {
    font-size: 0.85rem;
  }

  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media ${device.mobileS} {
    gap: 0.9rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  &.message {
    margin-top: 0.25rem;
  }

  &.buttons {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 6px;
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
  font-family: ${(props) => props.theme.fontFamily};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${(props) => props.theme.text};
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  }

  @media ${device.mobileL} {
    padding: 0.75rem 0.9rem;
    font-size: 0.9rem;
  }

  @media ${device.mobileS} {
    padding: 0.65rem 0.8rem;
    font-size: 16px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.85rem 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 6px;
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
  font-family: ${(props) => props.theme.fontFamily};
  resize: vertical;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${(props) => props.theme.text};
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  }

  @media ${device.mobileL} {
    min-height: 100px;
    padding: 0.75rem 0.9rem;
    font-size: 0.9rem;
  }

  @media ${device.mobileS} {
    min-height: 80px;
    padding: 0.65rem 0.8rem;
    font-size: 16px;
  }
`;

const Button = styled(motion.button)`
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  padding: 0.9rem 2rem;
  font-size: 0.95rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  border-radius: 6px;
  align-self: flex-end;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }

  @media ${device.mobileL} {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    align-self: stretch;
  }

  @media ${device.mobileS} {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    letter-spacing: 0.03em;
  }
`;

const BigTitleWrapper = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;

const ContactPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <PowerButton />
        <SocialIcons theme="light" />

        <FormCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Header>
            <Title>GET IN TOUCH</Title>
            <Subtitle>Have a project in mind? Drop me a line.</Subtitle>
          </Header>

          <Form
            action="https://getform.io/f/87b0b4c6-dd9c-4f8d-adaf-4d6053fe261f"
            method="post"
          >
            <FormGroup>
              <Input type="text" name="name" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input type="tel" name="phone" placeholder="Phone Number" />
            </FormGroup>
            <FormGroup className="message">
              <Textarea
                name="message"
                placeholder="Your Message"
                required
              />
            </FormGroup>
            <FormGroup className="buttons">
              <Button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                SEND MESSAGE
              </Button>
            </FormGroup>
          </Form>
        </FormCard>

        <BigTitleWrapper>
          <BigTitle text="CONTACT" top="10%" right="10%" />
        </BigTitleWrapper>
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
