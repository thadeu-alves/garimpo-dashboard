import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const API_URL = "https://graphql.datocms.com/";
    const API_TOKEN = process.env.DATO_READ_TOKEN;

    const query = `
    {
      allProdutos {
        title
        short
        link
        image {
          url
        }
        slug
      }
    }
    `;

    const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({ query }),
    });

    const { data } = await response.json();
    const products = data.allProdutos;
    
    return NextResponse.json([...products]);


  } catch (error: unknown) {


    if (error instanceof Error) {
      console.error('Erro ao buscar modelos:', error.message);
      return NextResponse.json({ erro: error.message }, { status: 500 });
    }

    return NextResponse.json({ erro: 'Erro desconhecido' }, { status: 500 });
  }
}