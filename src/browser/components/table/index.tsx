import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

type Person = {
  age: number;
  firstName: string;
  lastName: string;
  progress: number;
  status: string;
  visits: number;
};

const defaultData: Person[] = [
  {
    age: 24,
    firstName: "tanner",
    lastName: "linsley",
    progress: 50,
    status: "In Relationship",
    visits: 100,
  },
  {
    age: 40,
    firstName: "tandy",
    lastName: "miller",
    progress: 80,
    status: "Single",
    visits: 40,
  },
  {
    age: 45,
    firstName: "joe",
    lastName: "dirte",
    progress: 10,
    status: "Complicated",
    visits: 20,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("age", {
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    header: () => "Age",
  }),
  columnHelper.accessor("visits", {
    footer: (info) => info.column.id,
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];

export function Table() {
  const [data] = React.useState(() => [...defaultData]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    console.log("useEffect with i18n");
  }, [i18n]);

  useEffect(() => {
    console.log("useEffect with t");
  }, [t]);

  return i18n.t("text");

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
