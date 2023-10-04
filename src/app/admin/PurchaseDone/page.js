    'use client'
    import React, { useState, useEffect, useRef } from 'react';
    import { Tooltip } from 'primereact/tooltip';
    import { DataTable } from 'primereact/datatable';
    import { Column } from 'primereact/column';
    import Link from 'next/link';
    import { Button } from 'primereact/button';
    //import { ProductService } from './service/ProductService';

    
    export default function page() {
   
        const [products, setProducts] = useState([{
            id: '1000',
            fk_account_name: 'Dinesh Rajbhar ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '45626565',
            
        },
        {
            id: '1001',
            fk_account_name: 'Vipin Sharma ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '00256389',
            
        },
        {
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },
        {
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },{
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },{
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },{
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },{
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },{
            id: '1002',
            fk_account_name: 'Dinesh Kartik ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '56897845',
            
        },
        {
            id: '1003',
            fk_account_name: 'Arun Malviya ',
            product_link: 'ORAIMO 20000 mAh Power Bank (12 w, Fast Charging)  (White, Lithium Polymer)',
            cc_ac_number: '45254500',
            
        },]);
        const dt = useRef(null);
    
        const cols = [
            { field: 'id', header: 'ID' },
            { field: 'fk_account_name', header: 'FK Account Name' },
            { field: 'product_link', header: 'Product Link' },
            { field: 'cc_ac_number', header: 'CC Ac Number' }
        ];
    
        const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));
    
        useEffect(() => {
            //ProductService.getProductsMini().then((data) => setProducts(data));
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
        const exportCSV = (selectionOnly) => {
            dt.current.exportCSV({ selectionOnly });
        };
    
        const exportPdf = () => {
            import('jspdf').then((jsPDF) => {
                import('jspdf-autotable').then(() => {
                    const doc = new jsPDF.default(0, 0);
    
                    doc.autoTable(exportColumns, products);
                    doc.save('products.pdf');
                });
            });
        };
    
        const exportExcel = () => {
            import('xlsx').then((xlsx) => {
                const worksheet = xlsx.utils.json_to_sheet(products);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, {
                    bookType: 'xlsx',
                    type: 'array'
                });
    
                saveAsExcelFile(excelBuffer, 'products');
            });
        };
    
        const saveAsExcelFile = (buffer, fileName) => {
            import('file-saver').then((module) => {
                if (module && module.default) {
                    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                    let EXCEL_EXTENSION = '.xlsx';
                    const data = new Blob([buffer], {
                        type: EXCEL_TYPE
                    });
    
                    module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
                }
            });
        };
    
        const header = (
            <div className="flex align-items-center justify-content-end gap-2 d-md-flex justify-content-md-end">
                <Button type="button" label=".csv" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" label=".exl" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" label=".pdf" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
            </div>
        );
    
        return (
            <>
                <section className='section dashbboard'>
                <Tooltip target=".export-buttons>button" position="bottom" />
                        <div className="row">
                        <div className="col-lg-12">
                        <div className="card">
                        <h4> <div className='card-body'> Purchase Done</div></h4>
                        <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                            {cols.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} sortable />
                ))}
            </DataTable>
                        {/* <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                        <Tooltip target=".export-buttons>button" position="bottom" />
                            <Column field="id" header="ID"></Column>
                            <Column field="fk_account_name" header="FK Account Name"></Column>
                            <Column field="product_link" header="CategoryProduct Link"></Column>
                            <Column field="cc_ac_number" header="CC Ac Number"></Column>
                        </DataTable> */}
            </div>
        </div>
    </div>
    </section>

            </>

        )
    }
