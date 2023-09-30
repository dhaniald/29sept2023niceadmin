import Aside from "@/components/layout/Aside";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";




export default function AdminDashboardLayout({children}){

    return (
        <> 
                
        <Header /> 
        <Aside/>      
        {children} 
        <Footer />
    </>

     
    )
  }