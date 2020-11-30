import Head from 'next/head'
import Link from 'next/link'
import Title from '../components/title'
import Card from '../components/card'

<Head />

function Home() {
    return (
        <>
        <div>
            <Title text="Jacob Jones" />
        </div>
        <Card title="Título do card" text="Texto do card" />
        <Card title="Título 2" text="Texto 2" />
        <Link href="about"><a>Minha história</a></Link>
        </>
    )
}

export default Home