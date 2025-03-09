import css from './Contact.module.css'
export default function Contact({ contact, onDeleteHandler }) {
    let { id, name, phone } = contact;
    return (
        <div className={css.form}>
            <>
                <label>👨‍🚀{name}</label >
                <label>☎️{phone}</label>
            </>
            <button className={css.button} onClick={() => onDeleteHandler(id)}>Delete</button>
        </div>
    );
};