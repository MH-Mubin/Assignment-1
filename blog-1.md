"any" labeled as a "type safety hole" because it almost stops the type checking in typescript. For example, if we set a "string" value as a "any" type, then try to use methods of "number" type, typescript doesn't give any error. while it should give an error. because we can't use methods of "number" in a "string" type value. "any" type creating a "type safety hole" here.

On the other hand, "Unknown" is more safer. Because, It accepts the data but before use the data, it checks the type. So that methods of "number" type doesn't accept without error on "string" type data. That's why it's safer.

The process used to check the data type for an "unknown" type data, is called Type Narrowing. It transform an unknown type data to a specific type data. First it verify the data type then let it use the methods of that data types.
for example:
if (typeof data=== "string") { value.toUpperCase();}
