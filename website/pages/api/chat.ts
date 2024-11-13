import { NextRequest, NextResponse } from "next/server";

// pages/api/chat.js
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { message } = req.body;
    //   const cloudflareRouteUrl = 'https://api.ridechariot.fyi/chat/';
    const cloudflareRouteUrl =
      "https://chariotchat.charan8-pradeep.workers.dev";

    try {
      // Send a request to the Cloudflare Workers custom route
      const response = await fetch(cloudflareRouteUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      return res.status(200).json({ reply: data[1].response.response });
    } catch (error) {
      console.error("Error connecting to Cloudflare Worker route:", error);
      return res
        .status(500)
        .json({ error: "Error connecting to Cloudflare Worker route" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
