import TabsSection from "../../../../components/template-detail/Tabs/tabPanel"
import EmailNotification from "./emailNotification";
import PasswordSecurity from "./passwordSecurity";

const AccountInfo = () => {
    return (<TabsSection tabLabels={[{ id: 1, label: 'Password and Security' },
    { id: 2, label: 'Email Notification Settings' }
    ]}
        tabPanelComponents={[{ id: 1, component: <PasswordSecurity /> },
        { id: 2, component: <EmailNotification /> }
        ]} />)
}

export default AccountInfo;