interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}
  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }
  public getUserDetails(): UserDetails {
    return this.user;
  }
}

let user1 = new ConcretePrototype({
  name: "John",
  age: 30,
  email: "john@example.com",
});

let user2 = user1.clone();

if (user1.getUserDetails() === user2.getUserDetails()) {
  console.log("User details are same");
} else {
  console.log("User details are different");
}
