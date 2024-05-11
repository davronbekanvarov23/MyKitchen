function FormInput({ label, type, name, placeholder }) {
  return (
    <label className="form-control w-full bg-orange-400 pl-8 pb-8">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-80 "
      />
    </label>
  );
}

export default FormInput;
