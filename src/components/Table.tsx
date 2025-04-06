import {
    Table as ShadTable,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Product } from "@/utils/types";
import { ClipboardCopy } from "./ClipboardCopy";

interface TableProducts{
    products: Product[];
    header: string;
}

export default function Table({products, header} : TableProducts) {
  return (
    <ShadTable
        className="w-full"
    >
        <TableCaption>All {header}</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className="md:w-xl">Title</TableHead>
                <TableHead>Short</TableHead>
                <TableHead>Categorie</TableHead>
                <TableHead>Link</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                products.map((product : Product) => {
                    return (
                        <TableRow key={product.link}>
                            <TableCell className="font-medium">{product.title}</TableCell>
                            <TableCell>{product.short}</TableCell>
                            <TableCell>{product.slug.toUpperCase()}</TableCell>
                            <ClipboardCopy product={product}/>
                        </TableRow>
                    )
                })
            }
        </TableBody>
    </ShadTable>

  )
}
