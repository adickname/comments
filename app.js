import myExport from "./data.json" assert { type: "json" };
import { edit, deleteF, numberOpinion, add } from "./ownUserFunctions.js";
import {
  actualStateLocaleStorage,
  setActualStateLocaleStorage,
} from "./localeStorageFunctions.js";
//console.log(localStorage.getItem("actualState").textContent);
//if (localStorage.getItem("actualState") /*.textContent == "undefined"*/) {
//console.log(localStorage.getItem("actualState"));
if (localStorage.getItem("actualState")) {
  let actualstate = localStorage.getItem("actualState");
  document.body.outerHTML = actualstate;
  deleteF();
  edit();
} else {
  const datas = [];
  datas.push(myExport);

  datas.forEach((element) => {
    let comments = element.comments;
    comments.forEach((element) => {
      //all comment
      //  console.log(element);
      const comment = document.createElement("div");
      const nickname = document.createElement("div");
      const avatar = document.createElement("img");
      const userInfo = document.createElement("div");
      const entered = document.createElement("div");
      const score = document.createElement("div");
      const commentInfoAndOptions = document.createElement("div");
      const opinion = document.createElement("div");
      const plusOpinion = document.createElement("div");
      const minusOpinion = document.createElement("div");
      const imagePlus = document.createElement("img");
      const imageMinus = document.createElement("img");
      const replyBox = document.createElement("div");
      const reply = document.createElement("img");

      if (element) {
        document.body.appendChild(comment);
        comment.appendChild(userInfo);
        comment.classList.add("comment");
        //user info
        userInfo.appendChild(avatar);
        userInfo.appendChild(nickname);
        userInfo.appendChild(entered);
        userInfo.classList.add("userInfo");
        entered.innerHTML = element.createdAt;

        avatar.setAttribute("src", element.user.image.png);
        avatar.setAttribute("alt", "avatar");
        avatar.classList.add("avatar");
        nickname.innerHTML = element.user.username;
        nickname.classList.add("nickname");
        //content
        comment.innerHTML += "<p class='content'>" + element.content + "</p>";
        //opinions
        comment.appendChild(commentInfoAndOptions);
        commentInfoAndOptions.classList.add("commentInfoAndOptions");
        commentInfoAndOptions.appendChild(opinion);
        //plus opinion
        opinion.classList.add("opinion");
        opinion.appendChild(plusOpinion);
        plusOpinion.appendChild(imagePlus);
        plusOpinion.setAttribute("id", "plusOpinion");
        imagePlus.setAttribute("src", "images/icon-plus.svg");
        plusOpinion.classList.add("plusOpinion");
        //score init
        opinion.appendChild(score);
        //minus opinion
        opinion.appendChild(minusOpinion);
        minusOpinion.setAttribute("id", "minusOpinion");
        minusOpinion.classList.add("minusOpinion");
        minusOpinion.appendChild(imageMinus);
        minusOpinion.firstChild.classList.add("minus");
        imageMinus.setAttribute("src", "images/icon-minus.svg");
        //reply
        commentInfoAndOptions.appendChild(replyBox);
        replyBox.appendChild(reply);
        reply.classList.add("reply");
        reply.setAttribute("src", "images/icon-reply.svg");
        replyBox.innerHTML += "Reply";
        replyBox.classList.add("replyBox");
        // replyBox.classList.add("reply");
        //score edit
        score.classList.add("score");
        score.innerHTML = element.score;
        //replies
        let replies = element.replies;

        replies.forEach((element) => {
          let nicknameReply = document.createElement("div");
          let avatarReply = document.createElement("img");
          let enteredReply = document.createElement("div");
          //if reply
          if (element) {
            //  console.log(element);
            const replyComment = document.createElement("div");
            const replyInfo = document.createElement("div");
            document.body.appendChild(replyComment);
            replyComment.classList.add("replied");
            replyComment.appendChild(replyInfo);
            replyInfo.classList.add("replyInfo");

            if (element.user.username == "juliusomo") {
              let you = document.createElement("div");
              replyInfo.appendChild(you);
              you.classList.add("youButton");
              you.append("you");
            }
            //reply content
            replyComment.innerHTML +=
              "<p class='content'>" +
              "<span class='replyingUser'> " +
              "@" +
              element.replyingTo +
              "</span> " +
              element.content +
              "</p>" +
              "<div class='commentInfoAndOptions'>  <div class='opinion'> <div id='plusOpinion' class='plusOpinion'><img src='images/icon-plus.svg' alt=''></div> <div class='score'>" +
              element.score +
              "</div>     <div id='minusOpinion' class='minusOpinion'><img src='images/icon-minus.svg' class='minus' alt=''></div></div>" +
              "<div class='replyBox'><img src='images/icon-reply.svg' alt='' class='reply' alt=''>Reply</div>  </div>";

            const replyInfoAll = document.querySelectorAll(".replyInfo");
            replyInfoAll.forEach((element) => {
              element.appendChild(avatarReply);
              element.appendChild(nicknameReply);
              nicknameReply.classList.add("nickname");
              element.appendChild(enteredReply);
            });

            avatarReply.setAttribute("src", element.user.image.png);
            nicknameReply.innerHTML += element.user.username;

            enteredReply.innerHTML += element.createdAt;
            //user
            if (element.user.username === "juliusomo") {
              replyComment.innerHTML =
                '<div class="replyInfo"><img  alt="" src="images/avatars/image-juliusomo.png"><div>juliusomo</div>' +
                "<div>" +
                element.createdAt +
                " </div> </div>" +
                "<p class='content'>" +
                "<span class='replyingUser'> " +
                "@" +
                element.replyingTo +
                "</span> " +
                element.content +
                "</p>" +
                "<div class='commentInfoAndOptions'>  <div class='opinion'> <div id='plusOpinion' class='plusOpinion'><img alt='' src='images/icon-plus.svg'></div> <div class='score'>" +
                element.score +
                "</div>     <div id='minusOpinion' class='minusOpinion'><img alt='' src='images/icon-minus.svg' class='minus'></div></div>" +
                ' <div class="editOptions"><div class="delete"><img  src="images/icon-delete.svg" alt=""></div><div class="edit"><img src="images/icon-edit.svg" alt=""></div></div> ' +
                "</div>";
              edit();
              deleteF();
            }
          }
        });
      }
    });
    //add reply to comment

    setActualStateLocaleStorage();
  });
}
//actualStateLocaleStorage();
let input = document.createElement("div");
let replyElement = document.querySelectorAll(".replyBox");
replyElement.forEach((element) => {
  element.addEventListener("click", function reply() {
    let replyElement = document.querySelectorAll(".replyBox");
    let parentReply = element.parentNode;
    let parentCommentInfo = parentReply.parentNode;
    let createReply = document.createElement("div");
    parentCommentInfo.appendChild(createReply);
    document.body.appendChild(input);
    createReply.classList.add("replied");
    input.classList.add("input");
    input.innerHTML =
      "<textarea id='replyContent'></textarea>" +
      '<input type="submit" value="wyslij" id="send" />';
    let removeInput = document.querySelector(".input");
    removeInput.style.display = " flex";
    let readUserText = document.querySelector("#send");

    readUserText.addEventListener("click", () => {
      let userText = document.querySelector("#replyContent").value;
      removeInput.style.display = " none";
      let childs = parentCommentInfo.children;
      let childsUserInfo = childs.item(0);
      let contReplyToReply = childsUserInfo.parentNode;
      contReplyToReply.appendChild(createReply);

      let parentNick = childsUserInfo.querySelector(".nickname").textContent;

      let scoreR = element.score;
      if (isNaN(scoreR) === true) {
        scoreR = 0;
      }

      createReply.innerHTML =
        '<div class="userInfo"><img src="images/avatars/image-juliusomo.png" class="avatar" alt=""/><div>' +
        "juliusomo </div> <div>" +
        element.createdAt +
        "</div> </div>" +
        "<span class='replyingUser'>" +
        "@" +
        parentNick +
        "</span>" +
        " " +
        "<p class='content'>" +
        userText +
        "</p>" +
        '<div class="commentInfoAndOptions"><div class="opinion"><div class="plusOpinion" id="plusOpinion"><img alt="" src="images/icon-plus.svg" alt=""></div><div class="score">' +
        scoreR +
        '</div><div id="minusOpinion" class="minusOpinion"><img src="images/icon-minus.svg" alt=""></div></div><div class="editOptions"><div class="delete"><img src="images/icon-delete.svg" alt=""></div><div class="edit"><img src="images/icon-edit.svg" alt=""></div></div>';
      edit();
      deleteF();
      //adding plus opinion and minus opinion to own comment
      const plusScore = document.querySelectorAll(".plusOpinion");
      const minusScore = document.querySelectorAll(".minusOpinion");
      let isMinus = false;
      let isPlus = false;
      minusScore.forEach((element) => {
        element.addEventListener("click", () => {
          if (isMinus === false) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            if (isPlus === true) {
              scoreValue -= 2;
            } else {
              scoreValue--;
            }
            scoreNewValue.innerHTML = scoreValue;
            isMinus = true;
            isPlus = false;
          } else if (isMinus === true) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue++;
            scoreNewValue.innerHTML = scoreValue;
            isMinus = false;
          }
        });
      });
      plusScore.forEach((element) => {
        element.addEventListener("click", () => {
          if (isPlus === false) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            if (isMinus === true) {
              scoreValue = parseInt(scoreValue);
              scoreValue += 2;
            } else {
              scoreValue++;
            }

            scoreNewValue.innerHTML = scoreValue;
            isPlus = true;
            isMinus = false;
          } else if (isPlus === true) {
            const opinions = element.parentNode;
            const siblingsElement = opinions.children;
            let scoreValue = siblingsElement.item(1).textContent;
            let scoreNewValue = siblingsElement.item(1);
            scoreValue--;
            scoreNewValue.innerHTML = scoreValue;
            isPlus = false;
          }
        });
      });
    });
  });
});
addEventListener("load", setActualStateLocaleStorage());
//setActualStateLocaleStorage();
const all = document.querySelectorAll("*");
all.forEach((element) => {
  element.addEventListener("click", setActualStateLocaleStorage());
});
const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.setAttribute("value", "send");
});
addEventListener("close", setActualStateLocaleStorage());
edit();
deleteF();
add();
numberOpinion();
