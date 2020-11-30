import Link from 'next/link'
import Card from '../components/card'

function AboutPage() {
    return (
        <>
            <Card title="Carlos Machado" text="Designer de produtos" />
            <Link href="/" ><a>Voltar</a></Link>
        </>
    )
}

export default AboutPage