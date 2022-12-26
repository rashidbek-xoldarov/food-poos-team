export const InputField = ({classname,type, name, value, dataType,checkeed, placeholder,forwardRef , onInput , onChange}) => {
    return (
        <input className={classname} type={type} name={name} value={value} placeholder={placeholder} ref={forwardRef} checkeed={checkeed} data-type={dataType} onChange={onChange} onInput={onInput} />
    )
}