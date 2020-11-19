import React from "react";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./style";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no GitHub </Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório " />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/39227316?s=460&u=783c76c9fc8fa08ca97b1f8e05c575599c89df76&v=4"
            alt="Lucca"
          />
          <div>
            <strong>Rockeseat</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              reprehenderit accusantium! Labore, dicta accusantium molestias
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
