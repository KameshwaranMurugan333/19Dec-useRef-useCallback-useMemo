export const withBorder = (Component) => (props) => {
    return <div style={{ border: "1px solid red" }}>
        <Component myProp={"My Props"} />
    </div>
}