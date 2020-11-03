// "start": "react-scripts start",

- layout, what should the user see?
- Redux store:

---

const Login = (props) => {
return (

<form onSubmit={undefined}>
<input placeholder="username" value={props.username} name="username" type="text" onChange={undefined} />
<input placeholder= "password" value={props.password} name="password" type="text" onChange={undefined} />
<input type = "submit" value="Log In" />

    </form>

)

}

this could also be written as:

const Login = ({username, password}) => {
return (
<form onSubmit={undefined}>
<input placeholder="username" value={username} name="username" type="text" onChange={undefined} />
<input placeholder= "password" value={password} name="password" type="text" onChange={undefined} />
<input type = "submit" value="Log In" />

    </form>

)

}

syntax sugar decontructing props!

---
