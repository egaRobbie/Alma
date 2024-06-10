import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import PaymentSuccess from '../../components/paymentsuccess'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { useSearchParams } from 'next/navigation'




const PaymentStatus =() => {
    const searchParams = useSearchParams()
 
    const status = searchParams.get('status')
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <PaymentSuccess status={status}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PaymentStatus;

