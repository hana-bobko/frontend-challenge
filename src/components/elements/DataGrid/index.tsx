"use client";

import * as React from "react";

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const data: Product[] = [
    {
        name: "Teste",
        price: 1,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F542929%2Fconsole-playstation-5-slim-edicao-digital-branco-2-jogos-1000038914_1713450978_g.jpg&w=640&q=100g",
        description: "Teste descricao",
        id: 1,
        category: "Teste category",
    },
    {
        name: "Teste",
        price: 1,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages1.kabum.com.br%2Fprodutos%2Ffotos%2F477661%2Fcadeira-gamer-kbm-gaming-cg330-preto-com-almofadas-reclinavel-descanso-de-braco-2d-kgcg330pt_1708604137_g.jpg&w=640&q=100",
        description: "Teste descricao",
        id: 2,
        category: "Teste category",
    },
    {
        name: "Teste",
        price: 1,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages0.kabum.com.br%2Fprodutos%2Ffotos%2F634690%2Fiphone-16-128gb-ultramarino_1727104401_g.jpg&w=640&q=100",
        description: "Teste descricao",
        id: 3,
        category: "Teste category",
    },
    {
        name: "Teste",
        price: 1,
        img: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages8.kabum.com.br%2Fprodutos%2Ffotos%2F386858%2Fduocast-black-4p5e2aa_1666815689_g.jpg&w=640&q=100",
        description: "Teste descricao",
        id: 4,
        category: "Teste category",
    },
    {
        name: "Teste",
        price: 1,
        img: "https://i.pinimg.com/originals/77/b8/ec/77b8ece6ef885e3117dbc414724b58a2.jpg",
        description: "Teste descricao",
        id: 5,
        category: "Teste category",
    },
    {
        name: "Teste",
        price: 1,
        img: "https://i.pinimg.com/originals/77/b8/ec/77b8ece6ef885e3117dbc414724b58a2.jpg",
        description: "Teste descricao",
        id: 6,
        category: "Teste category",
    },
    {
        name: "Teste",
        price: 1,
        img: "https://i.pinimg.com/originals/77/b8/ec/77b8ece6ef885e3117dbc414724b58a2.jpg",
        description: "Teste descricao",
        id: 7,
        category: "Teste category",
    },
];
export type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
    description: string;
    category: string;
};

export const columns: ColumnDef<Product>[] = [
    {
        id: "id",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "img",
        header: () => <h3 className="text-base font-semibold leading-7 text-gray-900">Imagem</h3>,
        cell: ({ row }) => <img src={row.getValue("img")} alt={row.getValue("name")} className="w-16 h-16 object-cover" />,
    },
    {
        accessorKey: "name",
        header: () => <h3 className="text-base font-semibold leading-7 text-gray-900">Nome</h3>,
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "category",
        header: () => <h3 className="text-base font-semibold leading-7 text-gray-900">Categoria</h3>,
        cell: ({ row }) => <div>{row.getValue("category")}</div>,
    },
    {
        accessorKey: "price",
        header: () => <h3 className="text-base font-semibold leading-7 text-gray-900">Preço</h3>,
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(price);
            return <div>{formatted}</div>;
        },
    },
];

export function DataGrid() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
