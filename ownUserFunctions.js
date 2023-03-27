function edit() {
  const elementReply = document.querySelectorAll(".edit");
  elementReply.forEach((element) =>
    element.addEventListener("click", () => {
      let createArea = document.createElement("textarea");
      let parentReply = element.parentNode;
      let parentCommentInfo = parentReply.parentNode;
      let parentComment = parentCommentInfo.parentNode;
      let comment = parentComment.children.item(2);
      let commentContent = parentComment.children.item(2).innerText;
      const commentEditParent = document.createElement("div");
      document.body.appendChild(commentEditParent);
      commentEditParent.classList.add("commentEditParent");
      commentEditParent.appendChild(createArea);
      createArea.classList.add("editArea");
      createArea.append(commentContent);
      const button = document.createElement("button");
      commentEditParent.appendChild(button);
      button.classList.add("btn");
      button.addEventListener("click", () => {
        const newValue = document.querySelector(".editArea").value;
        comment.textContent = "";
        comment.append(newValue);
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

export { edit, deleteF, numberOpinion };
