import React from "react";
import logoImg from "../../assets/logo.svg";

import { Title, Form } from "./style";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no GitHub </Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório " />
        <button type="submit"> Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
