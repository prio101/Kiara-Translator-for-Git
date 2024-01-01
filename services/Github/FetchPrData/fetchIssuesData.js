import axios from "axios";
import OpenAiCaller from "../../Translate/openAiCaller.js";

class FetchIssuesData {
    constructor(){
        this.baseUrl = process.env.BASE_URL || "http://localhost:3000";
    }

    async call(reqData){
        console.log("reqData", reqData);
        let data = {
            data: {
                owner: reqData.owner,
                repo: reqData.repo,
                query: reqData.query
            }
        }

        let issues = await axios.post(`${this.baseUrl}/api/github/list-of-issues`, data);
        let comments;
        let result = [];
        if(issues != null && issues.data != null && issues.data.data != null && issues.data.data.length > 0){
            console.log("issues", issues)
            issues.data.data.map(async (issue) => {
                // get replies for each comment
                let reqDataForGetAllIssueComments = {
                  data: {
                    owner: reqData.owner,
                    repo: reqData.repo,
                    issue_number: issue.id
                  }
                }
                let getAllIssueComments = await axios.post(`${this.baseUrl}/api/github/list-of-issues-comments`, reqDataForGetAllIssueComments);
                comments = getAllIssueComments.data.data;

                console.log("comments", comments);
                comments.map(comment =>{
                    console.log("comment", comment);
                    let openAiCaller = new OpenAiCaller();
                    let reqDataForTranslate = {
                        data: {
                            text: comment.body,
                            language: "en"
                        }
                    }
                    let translate = openAiCaller.translateContent(reqDataForTranslate);
                    let reqDataForUpdateIssueComment = {
                        data: {
                            owner: reqData.owner,
                            repo: reqData.repo,
                            comment_id: comment.id,
                            body: translate.body
                        }
                    }
                    console.log("Error is happening here:", reqDataForUpdateIssueComment)
                    let updateIssueComment = axios.post(`${this.baseUrl}/api/github/update-issue-comment`, reqDataForUpdateIssueComment);
                    result.push(updateIssueComment);
                });
            });
        }
        console.log("comments", result);
    }


}

export default FetchIssuesData;
