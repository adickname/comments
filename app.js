import myExport from "./data.json" assert { type: "json" };
const datas = [];
datas.push(myExport);
console.log(datas);
datas.forEach((element) => {
  let comments = element.comments;
  comments.forEach((element) => {
    if (element.id) {
      const comment = document.createElement("div");
      const commentHtml = document.body.appendChild(comment);
      commentHtml.innerHTML = element.content;
    }
    if (element.replies) {
      let replies = element.replies;
      replies.forEach((element) => {
        const reply = document.createElement("div");
        const replyHTML = document.body.appendChild(reply);
        replyHTML.innerHTML = element.content;
      });
    }
  });
});
//pull out datas  from datas[] thanks forEach
/* 
datas.forEach((element) => {
  let comments = element.comments;
  comments.forEach((element) => {
    if (element.id) {
      console.log(element.content);
    }
    if (element.replies) {
      let replies = element.replies;
      replies.forEach((element) => {
        console.log(element.content);
      });
    }
  });
});
 */
