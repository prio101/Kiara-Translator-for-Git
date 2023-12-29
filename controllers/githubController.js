import axios from "axios";

export const signIn = async (req, res) => {
  // hit the github api to get the response with access token
  if (!req.body) {
    return res.status(400).send({
      message: "Request body can not be empty."
    });
  }
  res.status(200).json({ data: "Hello World" });
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

