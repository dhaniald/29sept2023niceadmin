//Import area
//Import DefaultImport from 'some location/library'
'use client'
 
import DataTable from 'react-data-table-component';
import React from 'react'
import Link from 'next/link'


//Defenation area

let columns=[
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'FK Account',
        selector: row => row.fk_account,
    },{
        name: 'ProductLink',
        selector: row => row.product_link,
    },{
        name: 'CCAccount Number',
        selector: row => row.cc_number,
    },
    {
        name: 'CC Holder Number',
        selector: row => row.cc_name,
    },{
        name: 'GiftAmount',
        selector: row => row.gift_amt,
    },{
        name: 'TSXAmount',
        selector: row => row.tsx_amt,
    },{
        name: 'FinalPrice',
        selector: row => row.final_price,
    },{
        name: 'GiftCard OTP',
        selector: row => row.gift_card_otp,
    },{
        name: 'Purchase OTP',
        selector: row => row.purchase_otp,
    },{
        name: 'Remark',
        selector: row => row.remark,
    },{
        name: 'PurchasedStartedAt',
        selector: row => row.purchase_s_date,
    },{
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Action',
        selector: row => row.action,
    },
];
let data= [
    {
        id: 1,
        fk_account: 'Gaurav@95',
        product_link: 'SanDisk SDCZ48-128G-I35 128 GB Pen Drive  (Black)',
        cc_number: '5555 5555 5555 5555',
        cc_name:'Gaurav Tiwari',
        gift_amt:'500',
        tsx_amt:'1500',
        final_price:'2500',
        gift_card_otp:'152520',
        purchase_otp:'789045',
        remark:'Thanks for business with us',
        purchase_s_date:'16:01:05 (PM) / 16:01:55 GMT',
        status:<span className="badge text-bg-warning">Pending</span>,
        action:<button className="btn btn btn-danger" onClick= {(e)=>{alert('Do you want to delete ?')}}>Delete</button>,

    },
    {
        id: 2,
        fk_account: 'Gaurav@95',
        product_link: 'SanDisk SDCZ48-128G-I35 128 GB Pen Drive  (Black)',
        cc_number: '5555 5555 5555 5555',
        cc_name:'Gaurav Tiwari',
        gift_amt:'500',
        tsx_amt:'1500',
        final_price:'2500',
        gift_card_otp:'152520',
        purchase_otp:'789045',
        remark:'Thanks for business with us',
        purchase_s_date:'16:01:05 (PM) / 16:01:55 GMT',
        status:<span className="badge text-bg-warning">Pending</span>,
        action:<button className="btn btn btn-danger" onClick= {(e)=>{alert('Do you want to delete ?')}}>Delete</button>,

    }, {
        id: 3,
        fk_account: 'vipin68@95',
        product_link: 'SanDisk SDCZ48-128G-I35 128 GB Pen Drive  (Black)',
        cc_number: '1555 5555 5555 5555',
        cc_name:'Vipin Sharma',
        gift_amt:'500',
        tsx_amt:'1500',
        final_price:'2500',
        gift_card_otp:'152520',
        purchase_otp:'789045',
        remark:'Thanks for business with us',
        purchase_s_date:'16:01:05 (PM) / 16:01:55 GMT',
        status:<span className="badge text-bg-warning">Pending</span>,
        action:<button className="btn btn btn-danger" onClick= {(e)=>{alert('Do you want to delete ?')}}>Delete</button>,

    }, {
        id: 4,
        fk_account: 'anuj@75',
        product_link: 'SanDisk SDCZ48-128G-I35 128 GB Pen Drive  (Black)',
        cc_number: '5555 4585 5555 5555',
        cc_name:'Anuj Singh',
        gift_amt:'500',
        tsx_amt:'1500',
        final_price:'2500',
        gift_card_otp:'152520',
        purchase_otp:'789045',
        remark:'Thanks for business with us',
        purchase_s_date:'16:01:05 (PM) / 16:01:55 GMT',
        status:<span className="badge text-bg-warning">Pending</span>,
        action:<button className="btn btn btn-danger" onClick= {(e)=>{alert('Do you want to delete ?')}}>Delete</button>,

    },  
]
;
export default function page() {
    return (
        <>
          <section className='section dashbboard'>
                    
                 <div className="row">
                        <div className="col-lg-12">
                    <div className="card">
                        <h4> <div className='card-body'> A</div></h4>
                        <DataTable columns={columns} data={data} pagination />
                         
                        </div>
                    </div>
                </div>
                </section>

        </>

    )
}

//Export area