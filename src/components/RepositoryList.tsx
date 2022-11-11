import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';


import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    // Para informar o tipo do que será armazenado dentro do estado
    const [repositories, setRepositories] = useState<Repository[]>([]);

    // Dois parametros. Primero, a função que será chamada. Segunda, a variável que quando sofrer alteração dispara a função
    useEffect(() => {
        fetch('https://api.github.com/users/paulomarquesdev/repos')
            .then(res => res.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map((repository) => {
                    return (
                        <RepositoryItem key={repository.name} repository={repository} />
                    )
                })}
            </ul>
        </section>
    )
};