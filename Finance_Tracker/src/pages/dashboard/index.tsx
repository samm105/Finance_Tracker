import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./Financial-record-form";
import { FinancialRecordList } from "./Financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import "./Financial-record.css";
import { useMemo } from "react";

export const DashBoard= () => {
    const { user } = useUser();
    const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);
    
    return <div className="dashboard-container"> 
     <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
     <FinancialRecordForm />
     <div>Total Monthly: ${totalMonthly}</div>
     <FinancialRecordList />
    </div>
};