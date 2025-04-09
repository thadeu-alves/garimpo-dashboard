import Table from "@/components/Table";
import { Product } from "@/utils/types";

interface Categories {
  topo: Product[];
  baixo: Product[];
  perfumes: Product[];
  acessorios: Product[];
}


export default async function Products() {
  const response = await fetch(process.env.NEXT_BASE_URL + "/api/products");
  const data = await response.json();

  const categories : Categories = {
    topo: [],
    baixo: [],
    perfumes: [],
    acessorios: [],
  };

  data.map((product : Product) => {
    if(product.slug == "tp"){
      categories.topo.push(product);
    }else if(product.slug == "bx"){
      categories.baixo.push(product)
    }else if(product.slug == "pf"){
      categories.perfumes.push(product);
    }else if(product.slug == "ac"){
      categories.acessorios.push(product);
    }
  })

  return (
    <section className="space-y-4">
        <Table products={categories.topo} header="Topo" />
        <Table products={categories.baixo} header="Baixo" />
        <Table products={categories.perfumes} header="Perfumes" />
        <Table products={categories.acessorios} header="Acessorios" />
    </section>
  );
}
