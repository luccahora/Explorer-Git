import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Header, RepositoryInfo, Issues } from "./styles";
import { FiChevronsLeft, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/39227316?s=460&u=783c76c9fc8fa08ca97b1f8e05c575599c89df76&v=4" />
          <div>
            <strong>vuejs/vue</strong>
            <p>Descricao do projeto</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>18</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>dasdas</strong>
            <p>asdas</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
