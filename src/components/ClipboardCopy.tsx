'use client'

import {  useState } from 'react';
import { TableCell } from './ui/table';
import { Product } from '@/utils/types';

export function ClipboardCopy({
    product
  }: {
    product: Product;
  }) {
  const [textToCopy,] = useState<string>(product.link);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  };

  return (
    <div>
      <TableCell
        onClick={handleCopy}
      >
        {isCopied ? "Copiado!" : product.link.replace("https://s.shopee.com.br/", "")}
      </TableCell>
    </div>
  );
}