import React from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { BsCloudUpload, BsFiles, BsStar } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

export default function BlockchainUpload() {
  return (
    <div className="tw-flex tw-h-screen ">
      <Sidebar />
      <div className="tw-overflow-y-auto tw-flex-1 tw-bg-gray-100 ">
        <div className="tw-h-16 tw-w-full tw-flex  tw-bg-blue-900 tw-items-center tw-justify-between tw-px-10">
          <div className="tw-flex tw-space-x-6 ">
            <div
              className={
                "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
              }
            >
              <BsFiles size={28} />
              <span>
                <Nav.Link className="link" href="/blockchain">
                  Your Files
                </Nav.Link>
              </span>
            </div>
            <div
              className={
                "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
              }
            >
              <BsCloudUpload size={28} />
              <span>
                <Nav.Link className="link" href="/blockchain/upload">
                  Upload File
                </Nav.Link>
              </span>
            </div>
          </div>
          <div className="tw-flex tw-space-x-6">
            <div className="tw-flex tw-h-10 tw-space-x-2 tw-bg-white tw-text-black tw-items-center tw-rounded-2xl tw-text-center tw-px-4">
              <span>15</span>
              <FaEthereum size={20} />
            </div>
            <div className=" tw-flex tw-h-10 tw-bg-white tw-text-black tw-items-center tw-rounded-2xl tw-px-4">
              1523uuf2dqhjHDBdahfb445
            </div>
          </div>
        </div>

        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ height: "calc(100vh - 64px)", position: "relative" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h3 className="text-center mb-4">Upload File</h3>

                <Form>
                  <Form.Group className="mt-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Control type="file" required />
                  </Form.Group>
                  <Button className="w-100 mt-4" type="submit">
                    Upload File on Blockchain
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
}
