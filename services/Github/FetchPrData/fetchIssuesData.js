import axios from "axios";

class FetchIssuesData {
    constructor(){
        this.baseUrl = process.env.BASE_URL || "http://localhost:3000";
    }
    
    async call(reqData){
        let data = {
            data: {
                owner: reqData.owner,
                repo: reqData.repo,
                query: reqData.query
            }
        }
    
        let issues = await axios.post(`${this.baseUrl}/api/github/list-of-issues`, data);
        
        if(issues && issues.length > 0){
            issues.map(async (issue) => {
                // get replies for each comment
                let reqDataForGetAllIssueComments = {
                  data: {
                    owner: owner,
                    repo: repo,
                    issue_number: issue.number
                  }
                }
                let getAllIssueComments = await axios.post(`${this.baseUrl}/api/github/issue-comments`, reqDataForGetAllIssueComments);
                let comments = getAllIssueComments.data.data;
                
                // save the replies in the db
            });
        }
    }


}

export default FetchIssuesData;