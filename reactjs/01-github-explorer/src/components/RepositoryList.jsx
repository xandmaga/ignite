import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"

const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )

}
