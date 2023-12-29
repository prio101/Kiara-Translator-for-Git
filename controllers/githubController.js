import axios from "axios";
import { github_base_url, github_user_token, github_api_version } from "../index.js";

export const signIn = async (req, res) => {
  // hit the github api to get the response with access token
  if (!req.body) {
    return res.status(400).send({
      message: "Request body can not be empty."
    });
  }

  let response = await axios.get(`${github_base_url}/user`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${github_user_token}`,
            'X-Github-Api-Version': github_api_version
        },
  });
  
  res.status(200).json({data: response.data });
}


// get the list of the github repos
// param:
//   - access_token
//   - username
// return:
//   - list of repos

export const getListOfRepos = async (req, res) => {
    // hit the github api to get the response with access token
    if (!req.body) {
        return res.status(400).send({
        message: "Request body can not be empty."
        });
    }
    res.status(200).json({ data: "Hello World" });
}


// get the list of the repo prs
// param:
//   - access_token
//   - username
//   - repo
// return:
//   - list of prs

export const getListOfPRs = async (req, res) => {
    // hit the github api to get the response with access token
    if (!req.body) {
        return res.status(400).send({
        message: "Request body can not be empty."
        });
    }
    res.status(200).json({ data: "Hello World" });
}

// get the list of the repo issues
// param:
//   - access_token
//   - username
//   - repo
// return:
//   - list of issues

export const getListOfIssues = async (req, res) => {
    // hit the github api to get the response with access token
    if (!req.body) {
        return res.status(400).send({
        message: "Request body can not be empty."
        });
    }
    res.status(200).json({ data: "Hello World" });
}

// get the comments of the repo prs
// param:
//   - access_token
//   - username
//   - repo
//   - pr
// return:
//   - list of comments

export const getListOfPRComments = async (req, res) => {
    // hit the github api to get the response with access token
    if (!req.body) {
        return res.status(400).send({
        message: "Request body can not be empty."
        });
    }
    res.status(200).json({ data: "Hello World" });
}

// write the comments of the repo prs
// param:
//   - access_token
//   - username
//   - repo
//   - pr
//   - comment
// return:
//   - list of comments

export const writePRComment = async (req, res) => {
    // hit the github api to get the response with access token
    if (!req.body) {
        return res.status(400).send({
        message: "Request body can not be empty."
        });
    }
    res.status(200).json({ data: "Hello World" });
}

