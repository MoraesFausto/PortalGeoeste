import styled from "styled-components";

export const Form = styled.form`
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: white;
}
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid rgb(8, 165, 238);
  text-align: center;

 input[type="text"],

 input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 1px solid rgb(8, 165, 238);
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: rgb(3, 72, 151);
  border-radius: 24px;
  transition: 0.25s;
}
 input[type="text"]:focus,
 input[type="password"]:focus {
  width: 280px;
  border-color: rgb(8, 165, 238);
}
  button[type="button"] {
  border: 0;
  background-color: rgb(8, 165, 238);
  display: block;
  margin: 10px auto;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgb(8, 165, 238);
  padding: 12px 8px;
  width: 100px;
  outline: none;
  color: white;
  border-radius: 22px;
  transition: 0.25s;
  cursor: pointer;
}
  button[type="button"]:hover {
  background: rgb(4, 107, 224);
}
`
export const Form1 = styled.form`
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  text-align: center;

  button[type="button"] {
  border: 0;
  background-color: rgb(8, 165, 238);
  display: block;
  margin: 10px auto;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgb(8, 165, 238);
  padding: 12px 8px;
  width: 100px;
  outline: none;
  color: white;
  border-radius: 22px;
  transition: 0.25s;
  cursor: pointer;
}
button[type="button"]:hover {
  background: rgb(4, 107, 224);
}
`
