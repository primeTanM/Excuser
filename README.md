# ExcuserAPI

Creates different excuses related to various situations. It is free to use without any API key. Visit https://excuser.herokuapp.com/ for more instructions.

## Examples
---

Family: My best friend got in an accident and I had to take his place.

Office: My parents showed up unannounced at my house.

Children: My temperature is really high today.

College: As my parents were not home so I went to drop off my little brother at school.

Party: I went too hard at my friend's party last night. Too tired right now. I'm going to have to sit this one out.

## Usage
---

Enter these commands into a shell.

Get a random excuse

```bash
curl https://excuser.herokuapp.com/v1/excuse
```

Get a specific excuse with a specific id

```bash
curl https://excuser.herokuapp.com/v1/excuse/id/101
```

Get n random excuses

```bash
curl https://excuser.herokuapp.com/v1/excuse/3
```

Get a random excuse from a specific category

```bash
curl https://excuser.herokuapp.com/v1/excuse/office
```

Get n random excuses from a specific category

```bash
curl https://excuser.herokuapp.com/v1/excuse/college/4
```

## Contribute
---

1. Look through the existing excuses inside `Excuses.js` to see if your excuse is original
2. Go to the `Issues` tab at the top of the GitHub page
3. Create a New Issue
4. Contribute your excuse using the format below
5. The developers will add your excuse to the database by linking it with a pull request

```gfmd
id: 
excuse:
category:
```
