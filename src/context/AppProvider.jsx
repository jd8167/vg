/* eslint-disable react/prop-types */
import { useState } from "react";
import { AppContext } from "./app-context";

// const global_fields = {
//   nationality_code: "",
//   currency: "",
//   destination_country_code: "",
//   visa_processing_speed: null,
//   arrival_date: "",
//   email: "",
//   traveler_list: [
//     {
//       first_name: "",
//       last_name: "",
//       dob: "",
//       nationality_country: "",
//       birth_country: "",
//       home_country: null,
//       passport_issued_country: null,
//       passport_num: null,
//       passport_issued_date: null,
//       passport_expiration_date: null,
//     },
//   ],
//   quoted_total: null,
//   order_id: null,
//   current_step: "step_2",
//   time_zone: null,
//   primary_product_id: null,
// };

function AppProvider({ children }) {
  // const [userVisaInfo, setUserVisaInfo] = useState(global_fields);
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState("");
  const [nationalityInitials, setNationalityInitials] = useState("");
  const [destinationInitials, setDestinationInitials] = useState("");

  // const tr = {
  //   global_fields: {
  //     common_nationality_country: "AU",
  //     product_add_ons: null,
  //     visa_type_id: "16",
  //     arrival_date: "2024-11-21",
  // visa_processing_speed: null,
  //     phone: null,
  //     order_notification_signup: null,
  //     intended_departure_date: null,
  //     traveling_from: null,
  //     email: "real.real@gmail.com",
  //     consent_to_marketing_emails: null,
  //   },
  //   traveler_list: [
  //     {
  //       first_name: "John Doe",
  //       last_name: "willian",
  //       dob: "1992-10-15",
  //       nationality_country: "AU",
  //       is_passport_on_hand: true,
  //       passport_num: null,
  //       passport_issued_date: null,
  //       passport_expiration_date: null,
  //       birth_country: "AU",
  //       home_country: "AU",
  //       gender: null,
  //       egypt_application_type: null,
  //       supporting_document_type: null,
  //       national_identity_number: null,
  //       date_of_issue: null,
  //       secondary_document_expiry_date: null,
  //       id_issuing_authority: null,
  //       arabic_name: null,
  //       dual_nationality: "No",
  //       dual_nationality_country: null,
  //       home_address: null,
  //       home_city: null,
  //       home_state: null,
  //       home_zip: null,
  //       occupation: null,
  //       passport_issued_country: "AU",
  //       marital_status: null,
  //       previously_visited: null,
  //       last_visit_arrival_date: null,
  //       last_visit_departure_date: null,
  //       last_visit_stayed_at: null,
  //       passport_scan: null,
  //       social_fund_certificate: null,
  //       passport_last_page: null,
  //       ever_been_deported: "No",
  //       deported_from_where: null,
  //       deported_date: null,
  //       provide_details: null,
  //     },
  //   ],
  //   primary_product_classification: "visa",
  //   quoted_total: "43293.51",
  //   currency: "NGN",
  //   order_id: null,
  //   current_step: "step_2",
  //   experiment_ids: [],
  //   splitversion: "",
  //   time_zone: "Africa/Casablanca",
  //   primary_product_id: "10115",
  //   destination_country_code: "EG",
  // };

  const values = {
    destination,
    setDestination,
    nationality,
    setNationality,
    nationalityInitials,
    setNationalityInitials,
    destinationInitials,
    setDestinationInitials,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;
