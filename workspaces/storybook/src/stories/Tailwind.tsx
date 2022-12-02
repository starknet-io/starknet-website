import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const tiers = [
  {
    id: "tier-hobby",
    name: "Hobby",
    href: "#",
    priceMonthly: 49,
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
  {
    id: "tier-team",
    name: "Team",
    href: "#",
    priceMonthly: 79,
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
      "Sapiente libero doloribus modi nostrum",
    ],
  },
];

export function Tailwind() {
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div>
          <img
            className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
            src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-lg font-semibold leading-8 text-indigo-400">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white">
              The right price for you,{" "}
              <br className="hidden sm:inline lg:hidden" />
              whoever you are
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              numquam eligendi quos odit doloribus molestiae voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                >
                  <div className="p-8 sm:p-10">
                    <h3
                      className="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                      id={tier.id}
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                      ${tier.priceMonthly}
                      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href={tier.href}
                          className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                          aria-describedby={tier.id}
                        >
                          Get started today
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-md lg:max-w-4xl">
            <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:min-w-0 lg:flex-1">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                  Discounted
                </h3>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  Get full access to all of standard license features for solo
                  projects that make less than $20k gross revenue for{" "}
                  <span className="font-semibold text-gray-900">$29</span>.
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-indigo-700 hover:bg-indigo-100"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
