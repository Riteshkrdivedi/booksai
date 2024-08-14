"use client";

import React from "react";
import Card from "./Card";
import Button from "./Button";

const HeroContent = () => {
  return (
    <div className="w-full h-fit pt-28 border flex flex-col justify-center items-center">
      <div className="border-black rounded-xl h-full w-4/5 bg-gradient-to-t from-[#2A0E61]/50 via-[#2A0E61]/10 to-transparent  ">
        <h2 className="text-5xl font-semibold text-center mt-10 m-3">
          API Pricing
        </h2>
        <p className="text-center text-lg ">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <div
          className=" flex md:justify-around md:flex-row flex-col justify-center items-center
         h-4/5 w-full"
        >
          <Card className="m-8 h-[65vh] w-72 flex flex-row">
            <div className="h-[45%] bg-gradient-to-tr from-[#030014]  via-[#2A0E61]/50 to-[#030014]  block w-full">
              <h3 className="text-4xl ml-4 mr-2 mt-12 font-semibold inline-block">
                $0.002
              </h3>
              <p className="inline-block text-gray-500"> per 1K Tokens</p>
              <div className="">
                <h2 className="mt-7 ml-3 inline-block mr-2">API : </h2>
                <p className="mt-7 inline-block">OpenAI</p>
              </div>
              <div className="">
                <h2 className="mt-7 ml-3 inline-block mr-2">Model : </h2>
                <p className="mt-7 inline-block"> GPT-3.5</p>
              </div>

              <Button className="border w-56 justify-center mt-4 m-7 hover:bg-[#3a2272] transition-all  rounded-2xl">
                {" "}
                Buy
              </Button>
            </div>

            <div className="h-[55%] block w-full">
              <div className="p-3">
                <h2 className="text-xl">Token Estimation</h2>
                <p className="text-sm text-gray-500">
                  On average, 1 token is approximately 4 characters or 0.75
                  words. For precise pricing, we recommend using our token
                  calculator tool.
                </p>
              </div>
              <div className="p-3">
                <h2 className="text-xl">Billing</h2>
                <p className="text-sm text-gray-500">
                  You will only be charged for the tokens used in generating the
                  book. The API tracks token usage and bills accordingly.
                  Detailed usage reports are available in your account
                  dashboard.
                </p>
              </div>
            </div>
          </Card>
          <Card className="m-8 h-[65vh] w-72 flex flex-row">
            <div className="h-[45%] bg-gradient-to-tr from-[#030014]  via-[#2A0E61]/50 to-[#030014]  block w-full">
              <h3 className="text-4xl ml-4 mr-2 mt-12 font-semibold inline-block">
                $0.03
              </h3>
              <p className="inline-block text-gray-500"> per 1K Tokens</p>
              <div className="">
                <h2 className="mt-7 ml-3 inline-block mr-2">API : </h2>
                <p className="mt-7 inline-block">OpenAI</p>
              </div>
              <div className="">
                <h2 className="mt-7 ml-3 inline-block mr-2">Model : </h2>
                <p className="mt-7 inline-block"> GPT-4</p>
              </div>

              <Button className="border w-56 justify-center mt-4 m-7 hover:bg-[#3a2272] transition-all  rounded-2xl">
                {" "}
                Buy
              </Button>
            </div>

            <div className="h-[55%] block w-full">
              <div className="p-3">
                <h2 className="text-xl">Token Estimation</h2>
                <p className="text-sm text-gray-500">
                  On average, 1 token is approximately 4 characters or 0.75
                  words. For precise pricing, we recommend using our token
                  calculator tool.
                </p>
              </div>
              <div className="p-3">
                <h2 className="text-xl">Billing</h2>
                <p className="text-sm text-gray-500">
                  You will only be charged for the tokens used in generating the
                  book. The API tracks token usage and bills accordingly.
                  Detailed usage reports are available in your account
                  dashboard.
                </p>
              </div>
            </div>
          </Card>
          <Card className="m-8 h-[65vh] w-72 flex flex-row">
            <div className="h-[45%] bg-gradient-to-tr from-[#030014]  via-[#2A0E61]/50 to-[#030014]  block w-full">
              <h3 className="text-4xl ml-4 mr-2 mt-12 font-semibold inline-block">
                $0.0008
              </h3>
              <p className="inline-block text-gray-500"> per 1K Tokens</p>
              <div className="">
                <h2 className="mt-7 ml-3 inline-block mr-2">API : </h2>
                <p className="mt-7 inline-block">Together AI</p>
              </div>
              <div className="">
                <h2 className="mt-7 ml-3 inline-block mr-2">Model : </h2>
                <p className="mt-7 inline-block"> Llama-2-70b</p>
              </div>

              <Button className="border w-56 justify-center mt-4 m-7 hover:bg-[#3a2272] transition-all  rounded-2xl">
                {" "}
                Buy
              </Button>
            </div>

            <div className="h-[55%] block w-full">
              <div className="p-3">
                <h2 className="text-xl">Token Estimation</h2>
                <p className="text-sm text-gray-500">
                  On average, 1 token is approximately 4 characters or 0.75
                  words. For precise pricing, we recommend using our token
                  calculator tool.
                </p>
              </div>
              <div className="p-3">
                <h2 className="text-xl">Billing</h2>
                <p className="text-sm text-gray-500">
                  You will only be charged for the tokens used in generating the
                  book. The API tracks token usage and bills accordingly.
                  Detailed usage reports are available in your account
                  dashboard.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
