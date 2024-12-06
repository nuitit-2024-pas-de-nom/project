export default function Footer() {
    return (
        <div className={"join join-horizontal "}>
            <input
                type="radio"
                name={"theme-buttons"}
                className={"btn theme-controller join-item"}
                aria-label={"Business"}
                value={"business"}
                />
            <input
                type="radio"
                name={"theme-buttons"}
                className={"btn theme-controller join-item"}
                aria-label={"Aqua"}
                value={"aqua"}
                />
            <input
                type="radio"
                name={"theme-buttons"}
                className={"btn theme-controller join-item"}
                aria-label={"Autumn"}
                value={"autumn"}
                />
            <input
                type="radio"
                name={"theme-buttons"}
                className={"btn theme-controller join-item"}
                aria-label={"Dark"}
                value={"dark"}
                />
            <input
                type="radio"
                name={"theme-buttons"}
                className={"btn theme-controller join-item"}
                aria-label={"Light"}
                value={"light"}
                />

        </div>
    )
}