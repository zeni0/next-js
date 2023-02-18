import Layout from "@/components/Layout"
import Link from "next/link";
import contacts from "../api/contacts"

export default function Contacts() {
    return(
    <Layout>
        <ul>
            {contacts.map(contact => {
                return(
                    <li>
                        <Link href={`contacts/${contact.id}`}>
                            {contact.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </Layout>
    )
}