import { UserData, updateUser } from "@/lib/database";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/auth/options";
import firestore from "@google-cloud/firestore";
import { Timestamp } from "firebase-admin/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, options);

  if (session) {
    // Signed in
    let data = (await JSON.parse(req.body)) as UserData;
    data.joinDate = Timestamp.fromDate(new Date());
    await updateUser(session.user.id, data);
    res
      .status(200)
      .redirect("/book")
      .json({ message: "Success! Your account was created" });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
