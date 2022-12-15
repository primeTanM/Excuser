# ExcuserAPI

Creates different excuses related to various situations. It is free to use without any API key. Visit https://excuser-three.vercel.app/ for more instructions.

## Maintainers 
1. [Tanmay Misra](https://github.com/primeTanM)
2. [Kaustubh Dwivedi](https://github.com/onlykingKD)


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

All commands accept a optional param on header to change execuses language. 

| Language              |  header language value       |
| -------------------   | ---------------------------- |
|  English              | eng                          |
|  Brazilian Portuguese | pt-br                        |
|                       |                              |

Get a random excuse

```bash
curl https://excuser.herokuapp.com/v1/excuse \
--header 'language: eng' # Optinal Param | Default language is eng (engllish)
```

Get a specific excuse with a specific id

```bash
curl https://excuser.herokuapp.com/v1/excuse/id/101 \
--header 'language: eng' # Optinal Param | Default language is eng (engllish)
```

Get n random excuses

```bash
curl https://excuser.herokuapp.com/v1/excuse/3 \
--header 'language: eng' # Optinal Param | Default language is eng (engllish)
```

Get a random excuse from a specific category

```bash
curl https://excuser.herokuapp.com/v1/excuse/office \
--header 'language: eng' # Optinal Param | Default language is eng (engllish)
```

Get n random excuses from a specific category

```bash
curl https://excuser.herokuapp.com/v1/excuse/college/4 \
--header 'language: eng' # Optinal Param | Default language is eng (engllish)
```

## Contribute
---
0. Have minimum 10 excuses at least then open a PR. If you want a new category, then minimum 20 excuses.
1. Look through the existing excuses inside [`Excuses_eng.js`](https://github.com/primeTanM/Excuser/blob/main/Excuses_eng.js) or [`Excuses_pt_br.js`](https://github.com/primeTanM/Excuser/blob/main/Excuses_pt_br.js) to see if your excuse is original.
2. Go to the `Issues` tab at the top of the GitHub page.
3. Create a New Issue.
4. Contribute your excuses using the format below.

```
id: 
excuse:
category:
```
