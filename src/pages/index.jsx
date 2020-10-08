import React from "react";

import { social } from '../../config/metadata';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Como Codar</h1>
      <p>Seja muito bem vindo! Este site ainda está em desenvolvimento.</p>
      <p>Enquanto isso, você poderá acessar as plataformas abaixo para encontrar mais conteúdo sobre programação e tecnologia.</p>
      <ul>
        {social.map(({ name, url, icon: Icon }) => (
          <li>
            <a href={url} target="_blank" rel="noreferrer">
              <Icon size={32} color="#fff" /> <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
