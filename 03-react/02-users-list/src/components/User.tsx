import * as React from "react";

export interface UserInfo {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  age: number;
  city: string;
  ip: string;
  isAdmin: boolean;
}
interface UserProps {
  user: UserInfo;
}

export default function User(props: UserProps) {
  return (
    <article className={props.user.isAdmin ? "admin" : undefined}>
      <h3>
        {props.user.first_name} {props.user.last_name}
        {props.user.isAdmin && (
          <img
            src="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-star-badge-icon-design-template-vector-png-image_770921.jpg"
            alt="badge"
            id="badge"
          />
        )}
      </h3>

      <img src={props.user.avatar} alt="profile" className="profile" />
      <p>Age: {props.user.age}</p>
      <p>City: {props.user.city}</p>
      <p>IP: {props.user.ip}</p>
    </article>
  );
}
