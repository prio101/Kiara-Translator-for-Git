import axios from "axios";


class FetchPrData {
  constructor() {
    this.baseUrl = process.env.BASE_URL || "http://localhost:3000";
  }

  async call(owner, repo, query) {
    let reqDataForGetAllPr = {
      data: {
        owner: owner,
        repo: repo,
        query: {
          state: query.state
        }
      }
    }

    let getAllPrs = await axios.post(`${this.baseUrl}/api/github`, reqDataForGetAllPr);

    // For all the open prs, get the comments
    // And then get also get all the replies for each comment
    // and save the ids / node of the replies

    getAllPrs.data.data.map(async (pr) => {
      let reqDataForGetAllPrComments = {
        data: {
          owner: owner,
          repo: repo,
          pr_number: pr.number
        }
      }
      let getAllPrComments = await axios.post(`${this.baseUrl}/api/github/pr-comments`, reqDataForGetAllPrComments);
      pr.comments = getAllPrComments.data.data;
    });


  }
}
