"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SendRequirements = () => {
    const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#020617] py-24">
      {/* BG shape */}
      <img
        src="/images/shape/shape-01.svg"
        alt="background shape"
        className="absolute top-0 left-0 -z-10 opacity-20 dark:opacity-40"
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Send Your Requirements
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Provide location and describe what you need
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900/70 shadow-xl rounded-2xl p-10 border border-blue-100 dark:border-slate-700">
          <form className="grid grid-cols-2 gap-8">
            {/* Keyword */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Keyword
              </label>
              <input
                type="text"
                placeholder="Enter your keyword"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your location"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none
                           dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number / WhatsApp No
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none
                           dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email ID{" "}
                <span className="text-gray-400 dark:text-gray-400">
                  (Optional)
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none
                           dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Describe Your Requirements
              </label>
              <textarea
                rows={5}
                maxLength={500}
                placeholder="Please describe what you need..."
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none resize-none
                           dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 text-right">
                0 / 500 characters
              </p>
            </div>

            {/* Consent */}
            <div className="col-span-2 flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-blue-300 dark:border-slate-500 text-blue-600 focus:ring-blue-500 bg-transparent"
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I consent to be contacted by service providers regarding my
                requirements. I understand that my information will be shared
                with relevant professionals who can fulfill my service needs.
              </p>
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-between mt-6">
                          <button
                              type="button"
                              onClick={() => router.back()}
                              className="rounded-lg border border-blue-500 px-8 py-3 text-blue-600 hover:bg-blue-50 transition
             dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800"
                          >
                              Back
                          </button>

              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-10 py-3 text-white hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendRequirements;