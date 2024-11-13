import { MapStyle } from "@/lib/mapStyle";
import { GoogleMap, OverlayView } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarDays } from "lucide-react";
import { getMonth } from "@/lib/dateHelpers";

export interface DataForDriver {
  [key: string]: {
    name: string;
    position: {
      lat: number;
      lng: number;
    };
    price: number;
    rating: number;
    ratings: number;
    profile_picture: string;
    joined: Date;
  };
}

export default function Map() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: location.lat, lng: location.lng }}
      mapContainerClassName="w-100 h-screen z-0 fixed"
      options={{
        disableDefaultUI: true,
        styles: MapStyle,
        keyboardShortcuts: false,
      }}
    >
      <Driver map={google.maps.Map} />
    </GoogleMap>
  );
}

// const driverData: DataForDriver = {
//   Test: {
//     name: "Amogh",
//     position: { lat: 30.289204, lng: -97.74148 },
//     price: 25,
//     rating: 4.5,
//     ratings: 673,
//     profile_picture:
//       "https://www.landfood.ubc.ca/files/2018/04/will-valley-square-crop-300x300.jpg",
//   },
// };

function Driver({ map }: { map: typeof google.maps.Map }) {
  const [data, setData] = useState({} as DataForDriver);

  useEffect(() => {
    fetch("/api/data/driver-data")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        for (var key in data) {
          console.log(
            new Date((data as unknown as DataForDriver)[key].joined).getTime()
          );
        }

        setData(data as unknown as DataForDriver);
      });
  }, []);

  return Object.entries(data).map(
    ([key, driver]) => (
      <OverlayView
        key={key}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={{ lat: driver.position.lat, lng: driver.position.lng }}
      >
        <>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div
                className={
                  "w-12 flex h-8 font-bold bg-black rounded-sm items-center"
                }
              >
                <h2 className="text-white m-auto text-xs">{driver.price}</h2>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={driver.profile_picture + "dfs"} />
                  <AvatarFallback>{driver.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{driver.name}</h4>
                  <p className="text-sm">
                    Rating: {driver.rating}{" "}
                    <span className="text-gray-600 italic">
                      ({driver.ratings})
                    </span>{" "}
                    | {"$"}
                    {driver.price}
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined {getMonth(new Date(driver.joined).getMonth())}{" "}
                      {new Date(driver.joined).getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </>
      </OverlayView>
    )
    // <OverlayView
    //   key={key}
    //   position={{ lat: driver.position.lat, lng: driver.position.lng }}
    // />
  );

  //       {Object.entries(data).map(([key, driver]) => (
  //         <Marker key={key} map={map}>
  //           <div>
  //             <h2>{weather.climate}</h2>
  //           </div>
  //         </Marker>

  //       )
  //   );
}

{
  /* function Marker({map,position}) {
  useEffect{() => {

  }, []);
} */
}
