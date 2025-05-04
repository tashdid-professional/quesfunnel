"use client";

import { useState } from "react";
import * as React from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setShowModal(true); // Show modal when email is successfully sent
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send email.");
    }
  };

  return (<div>
          <h1 className="text-3xl text-center mt-20 mb-10 px-5">Want to book our services? Get in touch </h1>

  
    <div className="max-w-md lg:mx-auto mx-5  mb-20  p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            placeholder="I need a website..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full px-4 py-2 h-32 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center "
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#E5E7FF] p-6 rounded-xl w-96 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <h3 className="text-2xl font-bold text-center text-gray-800">Thank You!</h3>
            <p className="text-center text-gray-600 mt-4">We will get back to you shortly.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}</div>
  );
}
