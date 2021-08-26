window.addEventListener("load", (event) => {
  console.log("hello from javascript!");
});

const buttons = document.querySelectorAll(".remove-game-btn");
// console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i];
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const gameId = e.target.value;
    const userId = e.target.id;
    // console.log(userId);
    const body = { user_id: userId, game_id: gameId}
    const res = await fetch(`/users/${userId}/userProfile`, {
      headers: { "Content-Type": "application/json"},
        method: "DELETE",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    // console.log(res);
    // console.log(data.message);
    if (data.message === "Successful") {
      console.log("Success");
      const container = document.querySelector(
        `#game-preview-containers-${gameId}`
      );
    //   console.log(container);
      container.remove();
    } else {
      console.log("Wut Happened");
    }
  });
}
