import Contact from '../Contact/Contact.jsx'

export default function ContactList({ contacts, deleteContact }) {
    return (
        <ul >
            {contacts.map((contact) => <li key={contact.id}>
                <Contact contact={contact} onDeleteHandler={deleteContact} />
            </li>)}
        </ul>);
}