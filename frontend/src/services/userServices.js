const allUserDetails = JSON.parse(localStorage.getItem("user"));
const userID = allUserDetails?.ID;

export const friendRequestList = async () => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/user/friendRequestList`,
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ userID }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      throw Error(`HTTP error! status: ${response.status}`);
    }
    console.log(json, "json request list");
    return json;
  } catch (error) {
    throw Error(error.message);
  }
};

export const fetchFriendList = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/user/friendList`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ userID }),
    });
    const json = await response.json();
    if (!response.ok) {
      throw Error(`HTTP error! status: ${response.status}`);
    }
    return json;
  } catch (error) {
    throw Error(error.message);
  }
};

export const fetchGhostUsers = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/user/ghostUsers`);
    const json = await response.json();
    if (!response.ok) {
      throw Error(`HTTP error! status: ${response.status}`);
    }
    return json;
  } catch (error) {
    throw Error(error.message);
  }
};
