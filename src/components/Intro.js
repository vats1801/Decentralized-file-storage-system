import React from "react";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Intro() {
  return (
    <div className="tw-px-32">
      <div className=" tw-h-20 tw-bg-white tw-w-full tw-flex tw-justify-between tw-items-center tw-text-black  tw-py-5">
        <img alt="" src={logo} className=" tw-h-16 tw-w-50" />
        <div className=" tw-flex tw-justify-evenly tw-items-center tw-h-16  tw-w-1/3 tw-text-lg">
          <span>Pricing</span>
          <span>Privacy</span>
          <span>Docs</span>
        </div>
        <div className="tw-flex tw-space-x-4">
          <Button variant="outline-primary">Log in</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
      <div className=" tw-h-full tw-mt-36 tw-w-full tw-items-center tw-flex">
        <div className=" tw-text-sky-600  tw-w-2/5">
          <h1 className=" tw-text-5xl tw-mb-5">Say hi to privacy</h1>
          <h1 className=" tw-text-5xl">Switch to minecloud</h1>
          <div className=" tw-mt-10 tw-text-black tw-mb-10 tw-text-xl">
            Here at Minecloud, we've created a suite of services truly focused
            on you. Switch to Minecloud Drive, Blockchain and more.
          </div>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
      <div className="tw-h-full tw-mt-48 tw-w-ful tw-flex tw-flex-col tw-items-center tw-px-44 ">
        <h1 className=" tw-text-6xl">
          <span className=" tw-text-orange-400">Decentralized </span>
          Storage is here
        </h1>
        <div className=" tw-mt-10 tw-text-center">
          <h6>
            Storing data on decentralized networks can be hard. Filebase removes
            that complexity.
          </h6>
          <h6>
            Upload data in seconds using the tools you already know and love.
          </h6>
        </div>
        <h2 className=" tw-mt-20">Network Integration</h2>
        <div className=" tw-bg-gray-200 tw-px-10 tw-mt-7 tw-rounded-2xl">
          <img
            alt=""
            src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
            className=" tw-h-44 tw-w-44 tw-object-contain "
          />
        </div>
      </div>
      <div className=" tw-mt-36 tw-flex tw-space-x-72 tw-items-center tw-w-full tw-h-full">
        <div className=" tw-space-y-8">
          <h1>Unparalleled security</h1>
          <p className=" tw-text-xl">
            Every file is encrypted, split into pieces, and stored on a global
            network of nodes, making data breaches and downtime a thing of the
            past.
          </p>
        </div>
        <div className=" tw-bg-gray-200 tw-w-1/2 tw-h-56 tw-px-8 tw-mt-7 tw-rounded-2xl ">
          hi
        </div>
      </div>

      <div className=" tw-w-full tw-h-full tw-flex tw-justify-between tw-mt-36">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            style={{ objectFit: "contain" }}
            src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
          />
          <Card.Body>
            <Card.Title>Unparalleled security</Card.Title>
            <Card.Text>
              Every file is encrypted, split into pieces, and stored on a global
              network of nodes, making data breaches and downtime a thing of the
              past.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
          />
          <Card.Body>
            <Card.Title>Unparalleled security</Card.Title>
            <Card.Text>
              Every file is encrypted, split into pieces, and stored on a global
              network of nodes, making data breaches and downtime a thing of the
              past.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
          />
          <Card.Body>
            <Card.Title>Unparalleled security</Card.Title>
            <Card.Text>
              Every file is encrypted, split into pieces, and stored on a global
              network of nodes, making data breaches and downtime a thing of the
              past.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
