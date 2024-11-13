"use client";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";
import { MapStyle } from "@/lib/mapStyle";

import { useEffect, useMemo, useState } from "react";
import Map from "@/components/ui/map";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { getGeocode, getLatLng } from "use-places-autocomplete";

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [lat, setLat] = useState(30.13);
  const [lng, setLng] = useState(-79.8);

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="relative text-center">
      <div className="absolute z-10 bg-white rounded-sm m-12 h-3/4 w-72">
        <h1 className="text-2xl font-bold m-5">Book</h1>
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);
              setLat(lat);
              setLng(lng);
            });
          }}
        />
      </div>
      {/* <div className="absolute z-10 bg-white rounded-sm self-end inset-x-0 ml-auto inset-y-0 mt-auto mb-36 mr-12 w-64 h-1/4">
        <h1 className="text-xl font-bold m-5">Driver</h1>
      </div> */}
      <Map />

      <Chatbot />
    </div>
  );
}

function Chatbot() {
  let data: any = [
    {
      sender: "bot",
      text: "Hi! Welcome to Chariot. Feel free to ask about what to do or explore in Austin!",
    },
  ];
  const [messages, setMessages] = useState(data);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      console.log(data);
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prevMessages: any) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages: any) => [
        ...prevMessages,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-10 right-5 w-full max-w-sm p-4 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Chatbot</h1>
      <div className="flex flex-col w-full max-w-sm bg-white shadow-md rounded-lg p-4 h-80 overflow-y-auto mb-4">
        {messages.map((msg: any, index: any) => (
          <p
            key={index}
            className={`${
              msg.sender === "user" ? "text-blue-600" : "text-green-600"
            }`}
          >
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="flex items-center w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}
