function FormInput({label, id, type}){
    return (
        <div className="flex flex-col font-normal gap-2">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                className="form-input px-6 py-2 outline-none focus:outline-none rounded-md border-white focus:border-auxiliary-uranus bg-transparent"
            ></input>
        </div>
    )
}

export default FormInput;