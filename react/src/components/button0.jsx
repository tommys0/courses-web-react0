import '../index.css'

function Button0({ label, handleClick }) {
    return (
        <button onClick={handleClick} className={'button'}>{label}</button>
    );
}

export default Button0;
