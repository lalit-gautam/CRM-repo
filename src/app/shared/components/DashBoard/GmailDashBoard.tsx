import React from 'react'
import Header from '../Header'
import MailHeader from './MailHeader'
import MailSidebar from './MailSidebar'
import Mail from './Mail/Mail'

function GmailDashBoard(){

    return(
        <div>
            <MailHeader/>
            <MailSidebar/>
            <Mail/>
        </div>
    )
}

export default GmailDashBoard