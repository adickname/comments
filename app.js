import myExport from "./data.json" assert { type: "json" };
//pull out datas  from datas[] thanks forEach and append in html
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
      avatar.classList.add("avatar");
      nickname.innerHTML = element.user.username;
      //content
      comment.innerHTML += "<br>" + element.content;
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

      let replies = element.replies;

      replies.forEach((element) => {
        let nicknameReply = document.createElement("div");
        let avatarReply = document.createElement("img");
        let enteredReply = document.createElement("div");
        if (element) {
          //console.log(element);
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
          replyComment.innerHTML +=
            "<span class='replyingUser'> " +
            "@" +
            element.replyingTo +
            "</span> " +
            " " +
            element.content +
            "<div class='commentInfoAndOptions'>  <div class='opinion'> <div id='plusOpinion' class='plusOpinion'><img src='images/icon-plus.svg'></div> <div class='score'>" +
            element.score +
            "</div>     <div id='minusOpinion' class='minusOpinion'><img src='images/icon-minus.svg' class='minus'></div></div> </div> ";

          const replyInfoAll = document.querySelectorAll(".replyInfo");
          replyInfoAll.forEach((element) => {
            element.appendChild(avatarReply);
            element.appendChild(nicknameReply);
            element.appendChild(enteredReply);
          });

          avatarReply.setAttribute("src", element.user.image.png);
          nicknameReply.innerHTML += element.user.username;

          enteredReply.innerHTML += element.createdAt;
        }
      });
    }
  });
});
