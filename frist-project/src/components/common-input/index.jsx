function CommonInput({label}){
    return(
        <div>
            <label htmlFor="name">{label}</label>
            <input
            name={name}
            id={id}
            placeholder={ placeholder || "enter value here"}
            value={value}
            onChange={onChange}
            />
        </div>
    );
}
export default CommonInput;