const newLockedHandler = () => {
  const url = document.querySelector("#www").value;
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#securepassword").value;

  const newLckd = {
    url: url,
    username: username,
    password: password,
  };

  if (
    newLckd.username === "" ||
    newLckd.password === "" ||
    newLckd.url === ""
  ) {
    return false;
  }
  console.log(newLckd);
  return true;
};

export default newLockedHandler;
