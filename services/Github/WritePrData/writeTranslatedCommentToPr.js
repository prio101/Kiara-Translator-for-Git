import axios from "axios";

class WriteTranslatedCommentToPr{
    constructor(){
        this.baseUrl = process.env.BASE_URL || "http://localhost:3000";
    }
    
    async writeTranslatedData(language, message, reqData){
        let data = {
            data: {
                owner: reqData.owner,
                repo: reqData.repo,
                pr_number: reqData.pr_number,
                comment_id: reqData.comment_id,
                translated_text: reqData.translated_text
            }
        }
    
        return await axios.post(`${this.baseUrl}/api/github/write-pr-comment`, data);
    }
}