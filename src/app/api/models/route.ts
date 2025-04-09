import { NextResponse } from 'next/server';
import { buildClient } from '@datocms/cma-client-node';

const client = buildClient({
    apiToken: process.env.DATO_FULL_ACCESS_TOKEN!,
});

export async function GET() {
    try {
        const itemTypes = await client.itemTypes.list();
        const modeloProduto = itemTypes.find(
            (item) => item.api_key === 'produto'
        );

        if (!modeloProduto) {
            return NextResponse.json(
                { erro: 'Modelo "produto" não encontrado' },
                { status: 400 }
            );
        }

        const produtos = await client.items.list({
            filter: {
                type: 'produto',
            },
        });

        return NextResponse.json({ produtos });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Erro ao buscar modelos:', error.message);
            return NextResponse.json({ erro: error.message }, { status: 500 });
        }

        return NextResponse.json(
            { erro: 'Erro desconhecido' },
            { status: 500 }
        );
    }
}
