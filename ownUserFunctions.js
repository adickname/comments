function edit() {
  const elementReply = document.querySelectorAll(".edit");
  elementReply.forEach((element) =>
    element.addEventListener("click", () => {
      let createArea = document.createElement("textarea");
      let parentReply = element.parentNode;
      let parentCommentInfo = parentReply.parentNode;
      let parentComment = parentCommentInfo.parentNode;
      let comment = parentComment.children.item(1).innerText;
      let commentValue = parentComment.children.item(1);
      console.log(comment);
      const commentEditParent = document.createElement("div");
      document.body.appendChild(commentEditParent);
      commentEditParent.classList.add("commentEditParent");
      commentEditParent.appendChild(createArea);
      createArea.classList.add("editArea");
      createArea.append(comment);
      const button = document.createElement("button");
      commentEditParent.appendChild(button);
      button.classList.add("btn");
      button.addEventListener("click", () => {
        const newValue = document.querySelector(".editArea").value;
        //  commentValue.innerText = "";
        commentValue.textContent = newValue;
        //deleting commentEditParent
        const deleteArea = document.querySelectorAll(".commentEditParent");
        deleteArea.forEach((element) => element.remove());
      });
    })
  );
}
function deleteF() {
  const deleteComment = document.querySelectorAll(".delete");
  deleteComment.forEach((element) => {
    element.addEventListener("click", () => {
      let parentReply = element.parentNode;
      let parentCommentInfo = parentReply.parentNode;
      let parentComment = parentCommentInfo.parentNode;
      parentComment.remove();
    });
  });
}
//adding plus opinion and minus opinion

function numberOpinion() {
  const plusScore = document.querySelectorAll(".plusOpinion");
  const minusScore = document.querySelectorAll(".minusOpinion");
  let isMinus = false;
  let isPlus = false;
  minusScore.forEach((element) => {
    if (element) {
      element.addEventListener("click", () => {
        if (isMinus == false) {
          if (isPlus == false) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue -= 1;
            scoreNewValue.innerHTML = scoreValue;
            isPlus = false;
            isMinus = true;
          } else if (isPlus == true) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue -= 2;
            scoreNewValue.innerHTML = scoreValue;
            isPlus = false;
            isMinus = true;
          }
        } else if (isMinus == true) {
          if (isPlus == false) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue = parseInt(scoreValue) + 1;
            scoreNewValue.innerHTML = scoreValue;
            isPlus = false;
            isMinus = false;
          }
        }
      });
    }
  });
  plusScore.forEach((element) => {
    let isMinus = false;
    let isPlus = false;
    if (element) {
      element.addEventListener("click", () => {
        if (isPlus == false) {
          if (isMinus == false) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue = parseInt(scoreValue) + 1;
            scoreNewValue.innerHTML = scoreValue;
            isPlus = true;
            isMinus = false;
          } else if (isMinus == true) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue = parseInt(scoreValue) + 2;
            scoreNewValue.innerHTML = scoreValue;
            isPlus = true;
            isMinus = false;
          }
        } else if (isPlus == true) {
          const opinions = element.parentNode;
          const siblingsElement = opinions.children;
          let scoreValue = siblingsElement.item(1).textContent;
          let scoreNewValue = siblingsElement.item(1);
          scoreValue = parseInt(scoreValue) - 1;
          scoreNewValue.innerHTML = scoreValue;
          isPlus = false;
          isMinus = false;
        }
      });
    }
  });
}
function add() {
  const comment = document.createElement("div");
  const nickname = document.createElement("div");
  const avatar = document.createElement("img");
  const userInfo = document.createElement("div");
  const entered = document.createElement("div");
  const paragraph = document.createElement("p");
  const createArea = document.createElement("textarea");
  document.body.appendChild(createArea);
  createArea.classList.add("editArea");
  const button = document.createElement("button");
  document.body.appendChild(button);
  button.classList.add("btn");
  button.addEventListener("click", () => {
    const value = document.querySelector(".editArea").value;
    document.body.appendChild(comment);
    comment.appendChild(userInfo);
    comment.classList.add("comment");
    //user info
    userInfo.appendChild(avatar);
    userInfo.appendChild(nickname);
    userInfo.appendChild(entered);
    userInfo.classList.add("userInfo");
    entered.innerHTML = "";

    avatar.setAttribute("src", "images/avatars/image-juliusomo.png");
    avatar.classList.add("avatar");
    nickname.innerHTML = "juliusomo";
    nickname.classList.add("nickname");
    //content
    //console.log(value);
    comment.appendChild(paragraph);
    paragraph.classList.add("content");
    paragraph.textContent += value;
    comment.innerHTML +=
      "<div class='commentInfoAndOptions'>  <div class='opinion'> <div id='plusOpinion' class='plusOpinion'><img src='images/icon-plus.svg'></div> <div class='score'>" +
      0 +
      "</div>     <div id='minusOpinion' class='minusOpinion'><img src='images/icon-minus.svg' class='minus'></div></div>" +
      ' <div class="editOptions"><div class="delete"><img src="images/icon-delete.svg" alt=""></div><div class="edit"><img src="images/icon-edit.svg" alt=""></div></div> ' +
      "</div>";
    edit();
    numberOpinion();
    deleteF();
  });
}
export { edit, deleteF, numberOpinion, add };
