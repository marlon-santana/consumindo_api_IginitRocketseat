

import { useState,useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

interface repository {
    name: string;
    description: string;
    html_url: string;
}



export function RepositoryList() {
    const [repositories, setRepositories] = useState<repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(Response => Response.json())
        .then(data => setRepositories(data))
    }, []);


    return (
        <section className="repository-list">
            <h2>Lista de Repositòrios</h2>
           

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name}repository={repository} />
                })}
            
            </ul>

        </section>
    );
}
