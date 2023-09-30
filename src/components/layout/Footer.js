import { APP_BRAND, APP_WEBSITE_URL } from '@/helper/helper'
import React from 'react'

export default function Footer() {
  return (
    <>
     <footer id="footer" className="footer">
    <div className="copyright">
      © Copyright <strong><span>{APP_BRAND}</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href={`${APP_WEBSITE_URL}`} target='_blank'> {APP_BRAND}</a>
    </div>
  </footer> 
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  
    </>
  )
}
