import Table from "@/components/Table";
import { Product } from "@/utils/types";

interface Categories {
  topo: Product[];
  baixo: Product[];
  acessorios: Product[];
}


export default async function Products() {
  const response = await fetch(process.env.NEXT_BASE_URL + "/api/products");
  const data = await response.json();

  const categories : Categories = {
    topo: [],
    baixo: [],
    acessorios: [],
  };

  data.map((product : Product) => {
    if(product.slug == "tp"){
      categories.topo.push(product);
    }else if(product.slug == "bx"){
      categories.baixo.push(product)
    }else if(product.slug == "ac"){
      categories.acessorios.push(product);
    }
  })

  return (
    <main className="p-4 space-y-4">
        <div 
          className="border-2 border-gray-200 rounded-2xl p-2"
        >
          <Table products={categories.topo} header="Topo" />
        </div>
        <div 
          className="border-2 border-gray-200 rounded-2xl p-2"
        >
          <Table products={categories.baixo} header="Baixo" />
        </div>
        <div 
          className="border-2 border-gray-200 rounded-2xl p-2"
        >
          <Table products={categories.acessorios} header="Acessorios" />
        </div>
    </main>
  );
}
