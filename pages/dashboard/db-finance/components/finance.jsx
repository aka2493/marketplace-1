import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import AccountCard from "./accounts-cards.components";
import PaymentActivityComponent from "./paymentActivity.component";

const Finance = () => {
    return (
        <TabsSection tabLabels={['Payment Activity', 'Accounts and Cards']}
            tabPanelComponents={[<PaymentActivityComponent />,
            <AccountCard />]} />
    );
};

export default Finance;
