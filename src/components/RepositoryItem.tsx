interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem({ repository }: RepositoryItemProps) {
    return (
        <li>
            <div className="card__info">
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
            </div>
            <a href={repository.html_url}>
                Acessar repositório
            </a>
        </li>
    )
};