import { UserData, getDriverData, updateUser } from "@/lib/database";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/auth/options";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, options);

  if (session) {
    var data = await getDriverData();
    res.status(200).json(data);
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
