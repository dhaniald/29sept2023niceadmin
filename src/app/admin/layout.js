import Aside from "@/components/layout/Aside";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BreadCrumb from "@/components/layout/BreadCrumb";



export default function AdminDashboardLayout({children}){

    return (
        <> 
        <Header /> 
        <Aside/>
        <main id="main" className="main">  
       <BreadCrumb/>
                 {children} 
          </main>
       
        <Footer />
    </>

     
    )
  }