import React, { useState, FormEvent, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { Title, Form, Repositories, Error } from "./style";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storatedRepositories = localStorage.getItem(
      "@GithubExplorer:repositorie"
    );

    if (storatedRepositories) {
      return JSON.parse(storatedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  /* Consume API  */
  /* Save new repository in state */
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    /* Check if the imput is empty */
    if (!newRepo) {
      setInputError("Digite o nome autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      /* Clear input */
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca por esse repositório ");
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no GitHub </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do repositório "
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit"> Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
