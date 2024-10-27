# Contact-Library

# END-POINTS
## GET
```
contact-library.vercel.app/api/v1/users
```
```
contact-library.vercel.app/api/v1/users/:id
```

## POST
```
contact-library.vercel.app/api/v1/users/create-user
```
### Example "Create - User"
```
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phoneNo": "1234567890",
    "address": "1234 Elm Street, Springfield",
    "profileImg": "https://example.com/images/johndoe.jpg"
}
```
## PUT
```
contact-library.vercel.app/api/v1/users/:id
```
### Example update user
```
{
    "name": "Updated John Doe",
    "email": "updatedjohndoe@example.com",
    "phoneNo": "updated1234567890",
    "address": "updated 1234 Elm Street, Springfield",
    "profileImg": "updated https://example.com/images/johndoe.jpg"
}
```

## DELETE
```
contact-library.vercel.app/api/v1/users/:id
```

TO RUN THIS PROJECT
<p>Clone this repository with "git clone {link}"</P>
