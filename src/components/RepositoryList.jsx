import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';


export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    // Two parameters. First parameter a function that is called. Second parameter is a variable that call a function that change
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
                        <RepositoryItem key={repository.id} repository={repository} />
                    )
                })}
            </ul>
        </section>
    )
};