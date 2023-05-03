

const InputField = ({text, setText, addTodo}) => {
    return (
        <label htmlFor="">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </label>
    )
};
export default InputField;
