import * as React from "react";
import * as ReactDOM from "react-dom";
import User from "../src/components/User";
const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

interface UserInfo {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  age: number;
  city: string;
  ip: string;
  isAdmin: boolean;
}
const users: UserInfo[] = [
  {
    id: 1,
    avatar: "https://cdn.fakercloud.com/avatars/nicollerich_128.jpg",
    first_name: "Claire",
    last_name: "Price",
    age: 12,
    city: "North Kirstin",
    ip: "161.208.247.105",
    isAdmin: false,
  },
  {
    id: 2,
    avatar: "https://cdn.fakercloud.com/avatars/edobene_128.jpg",
    first_name: "Carrie",
    last_name: "Mayer",
    age: 62,
    city: "Everettetown",
    ip: "123.224.60.146",
    isAdmin: true,
  },
  {
    id: 3,
    avatar: "https://cdn.fakercloud.com/avatars/rodnylobos_128.jpg",
    first_name: "Jessy",
    last_name: "Kassulke",
    age: 8,
    city: "Lake Fordhaven",
    ip: "164.89.151.58",
    isAdmin: false,
  },
  {
    id: 4,
    avatar: "https://cdn.fakercloud.com/avatars/charliegann_128.jpg",
    first_name: "Amalia",
    last_name: "Rogahn",
    age: 108,
    city: "South Russberg",
    ip: "162.25.24.120",
    isAdmin: false,
  },
  {
    id: 5,
    avatar: "https://cdn.fakercloud.com/avatars/jmfsocial_128.jpg",
    first_name: "Kristoffer",
    last_name: "Wuckert",
    age: 66,
    city: "Lake Angelina",
    ip: "85.179.25.149",
    isAdmin: false,
  },
  {
    id: 6,
    avatar: "https://cdn.fakercloud.com/avatars/craigrcoles_128.jpg",
    first_name: "Kiera",
    last_name: "Rohan",
    age: 36,
    city: "East Beverly",
    ip: "27.34.243.77",
    isAdmin: false,
  },
  {
    id: 7,
    avatar: "https://cdn.fakercloud.com/avatars/bruno_mart_128.jpg",
    first_name: "Emmie",
    last_name: "Hand",
    age: 74,
    city: "New Maryjaneberg",
    ip: "85.232.129.225",
    isAdmin: true,
  },
  {
    id: 8,
    avatar: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
    first_name: "Cameron",
    last_name: "Veum",
    age: 16,
    city: "Altadena",
    ip: "168.252.158.225",
    isAdmin: false,
  },
  {
    id: 9,
    avatar: "https://cdn.fakercloud.com/avatars/markwienands_128.jpg",
    first_name: "Tremaine",
    last_name: "Sanford",
    age: 10,
    city: "Lenexa",
    ip: "38.83.7.48",
    isAdmin: false,
  },
  {
    id: 10,
    avatar: "https://cdn.fakercloud.com/avatars/ah_lice_128.jpg",
    first_name: "Ronaldo",
    last_name: "Weissnat",
    age: 83,
    city: "Baumbachtown",
    ip: "50.218.254.52",
    isAdmin: false,
  },
  {
    id: 11,
    avatar: "https://cdn.fakercloud.com/avatars/zaki3d_128.jpg",
    first_name: "Ephraim",
    last_name: "Goyette",
    age: 63,
    city: "North Martina",
    ip: "147.105.193.65",
    isAdmin: false,
  },
  {
    id: 12,
    avatar: "https://cdn.fakercloud.com/avatars/boxmodel_128.jpg",
    first_name: "Clay",
    last_name: "Kunde",
    age: 113,
    city: "South Damon",
    ip: "209.104.243.157",
    isAdmin: false,
  },
  {
    id: 13,
    avatar: "https://cdn.fakercloud.com/avatars/VinThomas_128.jpg",
    first_name: "Melisa",
    last_name: "Leannon",
    age: 18,
    city: "Hilo",
    ip: "103.82.167.168",
    isAdmin: false,
  },
  {
    id: 14,
    avatar: "https://cdn.fakercloud.com/avatars/miguelmendes_128.jpg",
    first_name: "Clovis",
    last_name: "Medhurst",
    age: 15,
    city: "Harveybury",
    ip: "168.223.235.220",
    isAdmin: false,
  },
  {
    id: 15,
    avatar: "https://cdn.fakercloud.com/avatars/mandalareopens_128.jpg",
    first_name: "Mylene",
    last_name: "Renner",
    age: 49,
    city: "Arlington",
    ip: "223.89.148.36",
    isAdmin: false,
  },
  {
    id: 16,
    avatar: "https://cdn.fakercloud.com/avatars/ma_tiax_128.jpg",
    first_name: "Marcos",
    last_name: "Ferry",
    age: 47,
    city: "Strackehaven",
    ip: "74.94.165.210",
    isAdmin: false,
  },
  {
    id: 17,
    avatar: "https://cdn.fakercloud.com/avatars/balakayuriy_128.jpg",
    first_name: "Brain",
    last_name: "Mohr",
    age: 54,
    city: "Carrollton",
    ip: "11.121.113.44",
    isAdmin: false,
  },
  {
    id: 18,
    avatar: "https://cdn.fakercloud.com/avatars/aleclarsoniv_128.jpg",
    first_name: "Bella",
    last_name: "VonRueden",
    age: 18,
    city: "Columbia",
    ip: "224.144.68.251",
    isAdmin: true,
  },
  {
    id: 19,
    avatar: "https://cdn.fakercloud.com/avatars/andrewarrow_128.jpg",
    first_name: "Franz",
    last_name: "Raynor",
    age: 28,
    city: "Garrickchester",
    ip: "91.159.111.88",
    isAdmin: false,
  },
  {
    id: 20,
    avatar: "https://cdn.fakercloud.com/avatars/carlosgavina_128.jpg",
    first_name: "Celestino",
    last_name: "Bailey",
    age: 61,
    city: "Aronport",
    ip: "242.25.16.144",
    isAdmin: false,
  },
];

const App = (): JSX.Element => {
  return (
    <>
      <section id="adult">
        <h2>We are adults!</h2>
        {users
          .filter((user) => user.age >= 18)
          .map((user) => (
            <User key={user.id} user={user} />
          ))}
      </section>
      <section id="child">
        <h2>We are the future!</h2>
        {users
          .filter((user) => user.age < 18)
          .map((user) => (
            <User key={user.id} user={user} />
          ))}
      </section>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
