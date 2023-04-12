import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import AccountCard from "./accounts-cards.components";
import PaymentActivityComponent from "./paymentActivity.component";

const Finance = () => {
    return (
        <TabsSection tabLabels={[{ id: 1, label: 'Payment Activity' },
        { id: 2, label: 'Accounts and Cards' }
        ]}
            tabPanelComponents={[{ id: 1, component: <PaymentActivityComponent /> },
            { id: 2, component: <AccountCard /> }
            ]} />
    );
};

export default Finance;
