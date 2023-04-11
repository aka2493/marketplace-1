import TabsSection from "../../../../components/template-detail/Tabs/tabPanel"
import EmailNotification from "./emailNotification";
import PasswordSecurity from "./passwordSecurity";

const AccountInfo = () => {
    return (<TabsSection
        tabLabels={['Password and Security', 'Email Notification Settings']}
        tabPanelComponents={[<PasswordSecurity />,
        <EmailNotification />]} />)
}

export default AccountInfo;