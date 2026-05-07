In big projects, we can't repeat unnecessary code, while we can use some smart trick like "Pick" and "Omit".
Pick: It picks some property from the master interface. this is the syntax: Pick<Type, Keys>
here's an example: type LoginUser = Pick<User, "email" | "password">; here typescript will internally make this:{email: string;password: string;}
this is so powerfull because all the scice will synced automatically.

Omit pick everything except some of the property. It format like this:Omit<Type, Keys>
for example: type SafeUser = Omit<User, "password">; here the result will be
{id: number;name: string;email: string;role: string;createdAt: Date;}.

in real world project it reduce the code repetation, maintain type consistency, makes sclable architechture. that's how they follow DRY rule.
