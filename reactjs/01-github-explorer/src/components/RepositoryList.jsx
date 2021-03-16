import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"
import { useEffect, useState } from "react"

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com"
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })
                }
            </ul>
        </section>
    )

}
