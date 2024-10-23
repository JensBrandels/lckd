const handleForm = () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const user = {
    username: username,
    password: password,
  };

  if (user.username === "" || user.password === "") {
    return false;
  }
  console.log(user);
  return true;
};

export default handleForm;
