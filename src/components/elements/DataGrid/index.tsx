"use client";

import React, { FC, useState } from "react";

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
import { useStore } from "@/hooks/use-store";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import formatCurrency from "@/utils/data/format-currency";
import FormEditProduct from "@/components/forms/FormEditProduct";
import Modal from "../Modal";

import { Product } from "@/types/types";

interface DataGridProps {
    data: Product[];
}
//: FC<DataGridProps>
const DataGrid: React.FC<DataGridProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = React.useState<Product>({
        id: 0,
        name: "",
        category: "",
        price: 0,
        img: "",
        description: "",
    });
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const { removeProduct } = useStore();
    const columns: ColumnDef<Product>[] = [
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
            cell: ({ row }) => <div>{formatCurrency(row.getValue("price"))}</div>,
        },
        {
            id: "delete",
            header: () => <IconEdit className="w-8 h-8 text-sky-600" />,
            cell: ({ row }) => <IconEdit className="w-8 h-8 text-sky-600 cursor-pointer" onClick={() => openEdit(row.original)} />,
        },
        {
            id: "delete",
            header: () => <IconTrash className="w-8 h-8 text-red-600" />,
            cell: ({ row }) => <IconTrash className="w-8 h-8 text-red-600 cursor-pointer" onClick={() => removeProduct(row.original.id)} />,
        },
    ];

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
    async function openEdit(product: Product) {
        setProduct(product);
        setOpen(true);
    }
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
                                    Sem produtos.
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
            <Modal isOpen={open} onClose={() => setOpen(false)} title={"Edtar o produto"} description={""}>
                <FormEditProduct onClose={() => setOpen(false)} product={{ ...product, img: product.img || "" }} />
            </Modal>
        </div>
    );
};

export default DataGrid;
