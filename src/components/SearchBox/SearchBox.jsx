import css from './SearchBox.module.css'

export default function SearchBox({ nameParam, onChange }) {
    const onNameChange = function (evt) {
        onChange(evt.target.value);
    }
    return (<>
        <label>
            <span>🔎Find contacts by name</span>
            <input value={nameParam} onChange={onNameChange} className={css.formField} type="text" name="name" />
        </label>
    </>);
}