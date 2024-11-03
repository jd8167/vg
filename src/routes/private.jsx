import {
  Account,
  AccountSettings,
  EditPaymentMethod,
  PaymentMethod,
  PersonalDetails,
  Referral,
  Security,
} from "../pages";

const privateRoutes = [
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "account/referral",
    element: <Referral />,
  },
  {
    path: "account/payment-method",
    element: <PaymentMethod />,
  },
  {
    path: "account/payment-method/edit",
    element: <EditPaymentMethod />,
  },
  {
    path: "account/settings",
    element: <AccountSettings />,
  },
  {
    path: "account/settings/personal-details",
    element: <PersonalDetails />,
  },
  {
    path: "account/settings/security",
    element: <Security />,
  },
];

export default privateRoutes;
