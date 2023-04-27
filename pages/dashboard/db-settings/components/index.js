import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import PasswordSecurity from './passwordSecurity'
import EmailNotification from './emailNotification'
import UserInformationTab from './userInfomation'

const Index = () => {
  return (
    <TabsSection tabLabels={[{ id: 1, label: 'User Profile' }, { id: 2, label: 'Password and Security' },
    { id: 3, label: 'Email Notification Settings' }
    ]}
      tabPanelComponents={[{ id: 1, component: <UserInformationTab /> },
      { id: 2, component: <PasswordSecurity /> },
      { id: 3, component: <EmailNotification /> }
      ]} />
  );
};

export default Index;
