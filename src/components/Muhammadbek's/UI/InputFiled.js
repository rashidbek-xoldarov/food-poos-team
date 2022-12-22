export const InputField = ({text, name, value, placeholder, onchange}) => {
    return (
        <input className="order_input" type={text} name={name} value={value} placeholder={placeholder} onChange={onchange} />
    )
}