const Field = ({name, label, value, placeholder="", type="text", error=""}) => {
    return (
        <div className="h-full w-full">
            <input
                type={type}
                value={value}
                placeholder={placeholder || label}
                name={name}
                id={name}
                className={"bg-fuchsia-800 w-full h-full !p-2 rounded text-white border-none " + (error && " is-invalid")}
            />
            {
                error && (
                    <p className="invalid-feedback">{error}</p>
                )
            }
        </div>
    )
}

export default Field;