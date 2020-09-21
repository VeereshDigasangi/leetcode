var request = require("request-promise");
//requestrety
//



async function getArticles(page) {
    var options = {
        method: 'GET',
        url: 'https://jsonmock.hackerrank.com/api/article_users',
        qs: {
            page: page
        },
        json: true,
        resolvewithfullresponse: true
    };

    try {
        let res = await request(options);
        if (res.data && res.data.length)
            return Promise.resolve(res);
        else
            return Promise.reject(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

async function getHighestSubmissionCount(req) {

    let resObj = {
        submission_count: 0
    };
    if (req.data.length) {
        req.data.map(function (el) {
            if (el.submission_count > resObj.submission_count) {
                resObj = el;
            }
        })
    }
    return Promise.resolve(resObj);

}
async function articles() {
    try {
        // let resdata = {};
        let page = 1;
        let result = [];
        let articles = await getArticles(page);


        result = result.concat(articles.data);
        // console.log("res ", articles.data);

        // console.log("articles", articles);
        while (articles.total_pages > page) {
            page++;
            let res_next = await getArticles(page);
            result = result.concat(res_next.data);
        }

        // console.log("arthics ", result);
        let highestCount = await getHighestSubmissionCount(articles);
        console.log(highestCount);
        
        return highestCount;
    } catch (error) {
        console.log("something went wrng ", error);
    }
}

articles()


/* 
1. choose the language, db
2. master, stagng, develop, ind-branch
3. dev team PR,Unit testcase API and funcitons and have report CC
4. Dev merged Staging: testcase, PR Dev and Staging
5. QA happens at staging
        v1.0.1- QA
6. QA have a build version
7. Jeera maintain
8. QA will signof to move prod
9. Checklist to make prod realease
        1. credentials change
        2. Unit testing passed
        3. The prod env file is changed according environment

1. Logging for the crucial place : loggyly
{key:value}
2. Code has to covered trycatch, uncaughtexception
3. Sentry log needed 


 */