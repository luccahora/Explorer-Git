import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Header } from "./styles";
import { FiChevronsLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/Dashboard">
        <FiChevronsLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
