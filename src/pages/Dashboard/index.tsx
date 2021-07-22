import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
//import api from "../../services/api";

import logoImg from "../../assets/Logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  //const [repositories, setRepositories] = useState([]);

  // async function handleAddRepository(event: FormEvent): Promise<void> {
  //   event.preventDefault();
  //   const response = await api.get(`repos/${newRepo}`);

  //   console.log(response.data);
  // }

  function handleAddRepository() {
    console.log("teste");
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/51157987?v=4"
            alt="Alice David dos Santos"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy like lemon squeezed!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
