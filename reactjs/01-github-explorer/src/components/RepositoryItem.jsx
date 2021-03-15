export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Default Description"}</p>
            <a href={props.repository?.link ?? ""}>
                Acessar repositorio
            </a>
        </li>
    );

}