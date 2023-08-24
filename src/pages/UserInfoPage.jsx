import React from "react";
import PageTemplate from "../layout/PageTemplate";
import UserInfoContent from "../components/userInfo/UserInfoContent";

export default function UserInfoPage() {
  return <PageTemplate content={<UserInfoContent />} />;
}
