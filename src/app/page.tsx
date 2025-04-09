import { FollowersCard } from '@/components/FollowersCard';
import Table from '@/components/Table';

export default async function Home() {
    const response = await fetch(
        process.env.NEXT_BASE_URL + '/api/products/latest'
    );
    const data = await response.json();

    return (
        <section className="space-y-4">
            <div className="text-center mb-8">
                <h1 className="text-xl font-bold">Garimpo Style</h1>
                <p>Nosso Palco de Elegância.</p>
            </div>

            <div className="flex w-full gap-x-2">
                <FollowersCard social="instagram" />
                <FollowersCard social="instagram" />
                <FollowersCard social="instagram" />
            </div>

            <div>
                <Table header="Latest" products={data} />
            </div>
        </section>
    );
}
