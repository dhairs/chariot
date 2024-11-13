import { DataForDriver } from "@/components/ui/map";
import { firestore } from "./firestore";
import { Timestamp } from "@google-cloud/firestore";

export interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  isDriver: boolean;
  price?: number;
  image: string;
  rating?: number;
  joinDate: Timestamp;
  onboarded: boolean;
}

export async function getUserData(userId: string): Promise<UserData> {
  const docRef = firestore.collection("users").doc(userId);

  var data = (await docRef.get()).data() as UserData;

  return data;
}

// update the user's info
export async function updateUser(
  userId: string,
  newData: UserData
): Promise<void> {
  firestore
    .collection("users")
    .doc(userId)
    .update({ ...newData });

  return Promise.resolve();
}

// set user's first name
export async function setFirstName(userId: string, newFirstName: string) {
  var data = await getUserData(userId);
  data.firstName = newFirstName;
  await updateUser(userId, data);
}

// set user's last name
export async function setLastName(userId: string, newLastName: string) {
  var data = await getUserData(userId);
  data.lastName = newLastName;
  await updateUser(userId, data);
}

// set user's email
export async function setEmail(userId: string, newEmail: string) {
  var data = await getUserData(userId);
  data.firstName = newEmail;
  await updateUser(userId, data);
}

// set user's phone number
export async function setPhoneNumber(userId: string, newPhone: string) {
  var data = await getUserData(userId);
  data.firstName = newPhone;
  await updateUser(userId, data);
}

// // set user's username
// export function setUsername(userId: string, newUser: string) {
//   var data = getUserData(userId);
//   data.username = newUser;
//   updateUser(userId, data);
// }

// set driver's username
export async function setPrice(userId: string, newPrice: number) {
  var data = await getUserData(userId);
  data.price = newPrice;
  await updateUser(userId, data);
}

// update driver's rating
export async function updateRating(userId: string, newRating: number) {
  var data = await getUserData(userId);
  data.rating = newRating;
  await updateUser(userId, data);
}

// set user's username
export async function setDoB(userId: string, newDoB: Date) {
  var data = await getUserData(userId);
  data.dateOfBirth = newDoB;
  await updateUser(userId, data);
}

export async function isOnboarded(userId: string) {
  var data = await getUserData(userId);
  return data.onboarded;
}

export async function getAllDrivers() {
  const docRef = firestore.collection("users").where("isDriver", "==", true);

  var allData: UserData[] = [];
  (await docRef.get()).forEach((doc) => {
    allData.push(doc.data() as UserData);
  });

  return allData;
}

const testLat = 30.286108;
const testLng = -97.741679;

export async function getDriverData() {
  var response: DataForDriver = {};
  var allData = await getAllDrivers();
  for (var i = 0; i < allData.length; i++) {
    let currentData = allData[i];
    response[currentData.email] = {
      name: currentData.firstName,
      position: {
        lat: testLat - Math.random() * 0.01,
        lng: testLng - Math.random() * 0.01,
      },
      price: currentData.price!,
      rating: Math.round((Math.random() * 5 + Number.EPSILON) * 100) / 100,
      ratings: Math.round(Math.random() * 63 + 1),
      profile_picture: currentData.image,
      joined: currentData.joinDate.toDate(),
    };
  }

  return response;
}
