import React from "react";
import Sidebar from "../../components/sidebar";
import AnalyticCard from "../../components/analyticCard";
import Table from "../../components/Table";

export default function dashboard() {
  return (
    <>
      {/* sidebar */}
      <div className="flex flex-col-1">
        <Sidebar />
        <div className="flex flex-col bg-gray-400 w-full">
          <AnalyticCard />
          <div className="mx-10">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
