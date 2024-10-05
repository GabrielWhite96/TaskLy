import React from 'react';
import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterLinksWrapper,
  FooterCopyright,
  SocialIcons,
  SocialIcon
} from './Footer.styles';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterSection>
          <FooterTitle>Produtos</FooterTitle>
          <FooterLink href="#">Iniciar</FooterLink>
          <FooterLink href="#">Baixar Apps</FooterLink>
          <FooterLink href="#">Premium</FooterLink>
          <FooterLink href="#">Oferta educacional</FooterLink>
          <FooterLink href="#">Cartões Presente</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Suporte</FooterTitle>
          <FooterLink href="#">Centro de ajuda</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Traduções</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Recursos</FooterTitle>
          <FooterLink href="#">Esquema de URL</FooterLink>
          <FooterLink href="#">Indique amigos e ganhe</FooterLink>
          <FooterLink href="#">Integrações</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Sobre</FooterTitle>
          <FooterLink href="#">Sobre nós</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Mídia</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="#">Termos</FooterLink>
          <FooterLink href="#">Privacidade</FooterLink>
          <FooterLink href="#">Licença</FooterLink>
          <FooterLink href="#">Segurança</FooterLink>
        </FooterSection>
      </FooterLinksWrapper>

      <SocialIcons>
        <SocialIcon href="https://www.facebook.com" target="_blank">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com" target="_blank">
          <FaTwitter />
        </SocialIcon>
      </SocialIcons>

      <FooterCopyright>
        &copy; {new Date().getFullYear()} SeuApp. Todos os direitos reservados.
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
