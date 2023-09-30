import React from 'react'
import Link from 'next/link'
export default function Aside() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </a>
                    </li>{/* End Dashboard Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide" /><span>Purchasing</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="../admin/StartPurchase">
                                    <i className="bi bi-circle" /><span>New Purchase</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="../admin/PurchaseInProgress">
                                    <i className="bi bi-circle" /><span>Purchase In Progress</span>
                                </Link>
                            </li>

                            <li>
                                <Link href="../admin/PurchaseDone">
                                    <i className="bi bi-circle" /><span>Purchase Done</span>
                                </Link>
                            </li>

                        </ul>
                    </li>

                </ul>
            </aside>
        </>
    )
}
