import React from "react";
import Table from "react-bootstrap/Table";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export default function Recent() {
  return (
    <div className="tw-flex tw-h-screen ">
      <Sidebar />
      <div className="tw-overflow-y-auto tw-flex-1 tw-bg-gray-100">
        <Navbar />
        <Table
          striped
          bordered
          hover
          size="lg"
          className="text-center tw-cursor-pointer"
        >
          <thead>
            <tr>
              <th>File Name</th>
              <th>Created At</th>
              <th>Size</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>video</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
